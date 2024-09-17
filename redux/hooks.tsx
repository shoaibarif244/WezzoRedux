import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import type { RootState, AppDispatch } from './store';
import { useNavigation } from '@react-navigation/native';
import { AccountStackParams, RootStackParams } from '../../allTypes/Navigation';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useAppNavigation: () => NativeStackNavigationProp<RootStackParams> =
  useNavigation;
export const useAccountNavigation: () => NativeStackNavigationProp<AccountStackParams> =
  useNavigation;
