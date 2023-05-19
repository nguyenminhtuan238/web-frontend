import React, { useState } from 'react';

function CategoryList(props) {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(selectedCategory === category ? null : category);
  };

  return (
    <div>
      {props.categories.map((category) => (
        <div key={category.id}>
          <div
            className={`flex items-center py-2 px-4 rounded-md cursor-pointer ${
              selectedCategory === category
                ? 'bg-gray-500 text-white'
                : 'bg-gray-200 text-gray-700'
            }`}
            onClick={() => handleCategoryClick(category)}
          >
            <h2 className="font-bold text-lg">{category.name}</h2>
            {category.children && category.children.length > 0 && (
              <svg
                className={`ml-2 h-5 w-5 ${
                  selectedCategory === category ? 'transform rotate-180' : ''
                }`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 13.333l-5-5 .707-.707L10 11.92l4.293-4.294.707.707-5 5z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </div>
          {selectedCategory === category &&
            category.children &&
            category.children.length > 0 && (
              <div className="pl-4 mt-2">
                {category.children.map((childCategory) => (
                  <div key={childCategory.id} className="py-2">
                    <h3 className="font-bold text-gray-700">
                      {childCategory.name}
                    </h3>
                  </div>
                ))}
              </div>
            )}
        </div>
      ))}
    </div>
  );
}

export default CategoryList;
