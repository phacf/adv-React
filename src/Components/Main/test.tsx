import { render, screen } from '@testing-library/react'
import { isResSent } from 'next/dist/shared/lib/utils'

import Main from '.'

describe('<Main/>', () => {

  it('Should render colors correctly', () => {
    const { container } = render(<Main />)
    expect(container.firstChild).toHaveStyle({ 'background-color': '#06092b' })
  })


})
