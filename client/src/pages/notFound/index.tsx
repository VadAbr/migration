import { useNavigate } from 'react-router'
import { Button } from '@consta/uikit/Button'
import { Layout } from '@consta/uikit/Layout'
import { Responses404 } from '@consta/uikit/Responses404'

export const NotFoundPage = () => {
  const navigate = useNavigate()

  const goBack = () => {
    navigate(-1)
  }

  return (
    <Layout style={{ height: '100%' }} data-testid="notFoundPage">
      <Responses404
        size="m"
        title="Такой страницы нет"
        description="Возможно страница была удалена или в вашей ссылке ошибка"
        actions={
          <Button
            label="Вернуться назад"
            size="s"
            view="ghost"
            data-testid="backBtn"
            onClick={goBack}
          />
        }
      />
    </Layout>
  )
}
