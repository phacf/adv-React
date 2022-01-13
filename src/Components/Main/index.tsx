import * as S from './styles'

const Main = ({
                  title = 'React Avançado',
                  description = 'Typescript, react, next, styled components'
}) => {
  return (
    <S.Wrapper>
      <S.Logo
        src="https://www.vhv.rs/dpng/d/467-4672503_react-native-logo-svg-hd-png-download.png"
        alt="Imagem de um átomo e React avançado escrito ao lado"
      />
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <S.Ilustration
        src="https://www.flaticon.es/premium-icon/icons/svg/644/644639.svg"
        alt="Imagem de uma mulher sentada em cima de um átomo"
      />
    </S.Wrapper>
  )
}
export default Main
