import { useState, useEffect, useCallback } from 'react';
import { supabase } from '../config/supabase';

/**
 * Hook for managing Supabase authentication
 */
export const useSupabaseAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session }, error }) => {
      if (error) {
        setError(error.message);
      } else {
        setUser(session?.user || null);
      }
      setLoading(false);
    });

    // Subscribe to auth state changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user || null);
    });

    return () => subscription?.unsubscribe();
  }, []);

  const signUp = useCallback(async (email, password) => {
    setLoading(true);
    setError(null);
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });
      if (error) throw error;
      return { data, error: null };
    } catch (err) {
      setError(err.message);
      return { data: null, error: err };
    } finally {
      setLoading(false);
    }
  }, []);

  const signIn = useCallback(async (email, password) => {
    setLoading(true);
    setError(null);
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) throw error;
      return { data, error: null };
    } catch (err) {
      setError(err.message);
      return { data: null, error: err };
    } finally {
      setLoading(false);
    }
  }, []);

  const signOut = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    user,
    loading,
    error,
    signUp,
    signIn,
    signOut,
  };
};

/**
 * Hook for Supabase data operations (CRUD)
 */
export const useSupabaseData = (table) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async (query = {}) => {
    setLoading(true);
    setError(null);
    try {
      let queryBuilder = supabase.from(table).select('*');

      // Apply filters if provided
      if (query.filters) {
        Object.entries(query.filters).forEach(([key, value]) => {
          queryBuilder = queryBuilder.eq(key, value);
        });
      }

      // Apply ordering if provided
      if (query.orderBy) {
        queryBuilder = queryBuilder.order(query.orderBy.column, {
          ascending: query.orderBy.ascending !== false,
        });
      }

      // Apply limit if provided
      if (query.limit) {
        queryBuilder = queryBuilder.limit(query.limit);
      }

      const { data: result, error: err } = await queryBuilder;

      if (err) throw err;
      setData(result || []);
      return { data: result, error: null };
    } catch (err) {
      setError(err.message);
      return { data: null, error: err };
    } finally {
      setLoading(false);
    }
  }, [table]);

  const insertData = useCallback(async (payload) => {
    setLoading(true);
    setError(null);
    try {
      const { data: result, error: err } = await supabase
        .from(table)
        .insert([payload])
        .select();

      if (err) throw err;
      setData((prev) => [...prev, result[0]]);
      return { data: result, error: null };
    } catch (err) {
      setError(err.message);
      return { data: null, error: err };
    } finally {
      setLoading(false);
    }
  }, [table]);

  const updateData = useCallback(async (id, payload) => {
    setLoading(true);
    setError(null);
    try {
      const { data: result, error: err } = await supabase
        .from(table)
        .update(payload)
        .eq('id', id)
        .select();

      if (err) throw err;
      setData((prev) =>
        prev.map((item) => (item.id === id ? result[0] : item))
      );
      return { data: result, error: null };
    } catch (err) {
      setError(err.message);
      return { data: null, error: err };
    } finally {
      setLoading(false);
    }
  }, [table]);

  const deleteData = useCallback(async (id) => {
    setLoading(true);
    setError(null);
    try {
      const { error: err } = await supabase.from(table).delete().eq('id', id);

      if (err) throw err;
      setData((prev) => prev.filter((item) => item.id !== id));
      return { error: null };
    } catch (err) {
      setError(err.message);
      return { error: err };
    } finally {
      setLoading(false);
    }
  }, [table]);

  return {
    data,
    loading,
    error,
    fetchData,
    insertData,
    updateData,
    deleteData,
  };
};
