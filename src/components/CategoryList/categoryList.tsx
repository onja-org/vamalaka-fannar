import React from 'react'
import styled from 'styled-components'
import { CategoryItem } from '../CategoryItem/categoryItem'

export interface CategoryListProps {
  primary: boolean
  categories: { id: string | number; title: string }[]
  selectCategory: () => void
}

const CategoryListContainer = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 15px;
`

export const CategoryList: React.FC<CategoryListProps> = ({
  primary,
  categories,
  selectCategory,
}) => {
  return (
    <CategoryListContainer>
      {categories.map((category: { id: string | number; title: string }) => (
        <CategoryItem
          key={category.id}
          item={category.title}
          primary={primary}
          selectCategory={selectCategory}
        />
      ))}
    </CategoryListContainer>
  )
}
