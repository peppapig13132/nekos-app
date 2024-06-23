import React from 'react';
import { TagProps } from '../interfaces/component.interface';

export const Tag:React.FC<TagProps> = ({name}) => {
  return (
    <span className="bg-green-200 hover:bg-green-300 text-green-800 text-xs font-medium m-1 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300 hover:cursor-pointer">{name}</span>
  );
}