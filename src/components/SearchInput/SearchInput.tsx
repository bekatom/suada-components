import { SearchRounded } from '../../icons/SearchRounded'
import { Input } from '../Input'
import IconButton from '@mui/material/IconButton'
import { useTranslation } from '../Providers/TranslationProvider/TranslationProvider'
import { ISearchInputProps } from './searchInput.interface'

export const SearchInput = ({
  onSearchSubmit,
  searchText,
  handleSearchChange,
}: ISearchInputProps) => {
  const { t } = useTranslation()
  return (
    <form onSubmit={onSearchSubmit}>
      <Input
        label={t('general.search_placeholder')}
        type='text'
        size='small'
        value={searchText}
        onChange={handleSearchChange}
        icon={
          <IconButton onClick={onSearchSubmit}>
            <SearchRounded />
          </IconButton>
        }
      />
    </form>
  )
}
