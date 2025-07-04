import React from 'react';
import { Edit, Trash2, Eye } from 'lucide-react';
import { Button } from './Button';

export const Table = ({
  columns,
  data,
  onEdit,
  onDelete,
  onView,
}) => {
  return (
    <div className="overflow-hidden">
      <div className="bg-gradient-to-r from-pink-200 to-blue-200 px-6 py-4 rounded-t-xl">
        <div className="grid grid-cols-12 gap-4 font-medium text-gray-700">
          {columns.map((column, index) => (
            <div
              key={column.key}
              className={index === 0 ? 'col-span-3' : index === columns.length - 1 ? 'col-span-3' : 'col-span-2'}
            >
              {column.label}
            </div>
          ))}
          {(onEdit || onDelete || onView) && <div className="col-span-3">Actions</div>}
        </div>
      </div>
      
      <div className="space-y-2 p-4 bg-blue-50">
        {data.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="bg-blue-400/70 backdrop-blur-sm rounded-xl px-6 py-4 hover:bg-blue-400/80 transition-colors"
          >
            <div className="grid grid-cols-12 gap-4 items-center text-white">
              {columns.map((column, colIndex) => (
                <div
                  key={column.key}
                  className={colIndex === 0 ? 'col-span-3' : colIndex === columns.length - 1 ? 'col-span-3' : 'col-span-2'}
                >
                  {column.render ? column.render(row[column.key], row) : row[column.key]}
                </div>
              ))}
              {(onEdit || onDelete || onView) && (
                <div className="col-span-3 flex space-x-2">
                  {onEdit && (
                    <Button
                      size="sm"
                      variant="secondary"
                      onClick={() => onEdit(row)}
                      className="px-2 py-1"
                    >
                      <Edit size={14} />
                      <span className="ml-1 text-xs">Edit</span>
                    </Button>
                  )}
                  {onDelete && (
                    <Button
                      size="sm"
                      variant="danger"
                      onClick={() => onDelete(row)}
                      className="px-2 py-1"
                    >
                      <Trash2 size={14} />
                      <span className="ml-1 text-xs">Delete</span>
                    </Button>
                  )}
                  {onView && (
                    <Button
                      size="sm"
                      variant="secondary"
                      onClick={() => onView(row)}
                      className="px-2 py-1 bg-gray-600 text-white hover:bg-gray-700"
                    >
                      <Eye size={14} />
                      <span className="ml-1 text-xs">View</span>
                    </Button>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};