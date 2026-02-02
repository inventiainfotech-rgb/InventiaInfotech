import { useSupabaseData } from './useSupabase';
import { useAuth } from '../context/AuthContext';
import { supabase } from '../config/supabase';
import { useCallback } from 'react';

/**
 * Custom hook for managing status checks with Supabase
 */
export const useStatusChecks = () => {
  const { user } = useAuth();
  const { data, loading, error, fetchData, insertData, deleteData } = useSupabaseData('status_checks');

  // Fetch user's status checks
  const getStatusChecks = useCallback(async () => {
    if (!user) return { data: [], error: 'User not authenticated' };
    
    return fetchData({
      filters: { user_id: user.id },
      orderBy: { column: 'created_at', ascending: false },
      limit: 100
    });
  }, [user, fetchData]);

  // Create a new status check
  const createStatusCheck = useCallback(async (clientName) => {
    if (!user) return { data: null, error: 'User not authenticated' };

    return insertData({
      user_id: user.id,
      client_name: clientName
    });
  }, [user, insertData]);

  // Delete a status check
  const removeStatusCheck = useCallback(async (id) => {
    if (!user) return { error: 'User not authenticated' };
    
    return deleteData(id);
  }, [user, deleteData]);

  return {
    statusChecks: data,
    loading,
    error,
    getStatusChecks,
    createStatusCheck,
    removeStatusCheck
  };
};
