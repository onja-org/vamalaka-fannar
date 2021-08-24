import styled from 'styled-components'
import { CategoryItem } from '../CategoryItem/CategoryItem'

interface Category {
  id: string
  title: string
}
export interface CategoryProps {
  primary: boolean
  categories: Category[]
  selectCategory: () => void
}

export const Categories: React.FC<CategoryProps> = ({
  primary,
  categories,
  selectCategory,
}) => {
  return (
    <CategoryContainer>
      <h4>Top categories</h4>
      <CategoryList>
        {categories.map((category) => (
          <CategoryItem
            key={category.id}
            item={category.title}
            primary={primary}
            selectCategory={selectCategory}
          />
        ))}
      </CategoryList>
    </CategoryContainer>
  )
}

const CategoryContainer = styled.div``
const CategoryList = styled.ul`
  padding: 0;
  display: flex;
  flex-direction: row;
  gap: 15px;
  overflow-x: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`
