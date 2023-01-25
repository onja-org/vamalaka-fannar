import styled from 'styled-components'
import { mediaQueries } from '../../mediaQueries/mediaQueries'
import { CategoryItem } from '../CategoryItem/CategoryItem'

interface Category {
  id: string
  title: string
}
export interface CategoryProps {
  primary: boolean
  categories: Category[]
  selectCategory: (e: React.MouseEvent<HTMLButtonElement>) => void
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
            categoryId={category.id}
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
  justify-content: space-between;
  overflow-x: auto;
  margin-bottom: 25px;

  &::-webkit-scrollbar {
    display: none;
  }

  ${mediaQueries('md', null)`
    gap: 15px; 
  `}
`
export default Categories