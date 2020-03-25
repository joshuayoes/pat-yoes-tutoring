import React from "react"
import renderer from "react-test-renderer"

import Strength from "../strength"

describe("Strength", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<Strength           
        svg='../../../static/icon-decades-of-experience.svg'
        alt='Award icon'
        heading='Decades of Experience'
        description='Pat has experience in multiple educational roles in his career, giving him a deep breadth of experience to draw from.'
      />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  // it('fails when not required props', () => {
  //   const tree = renderer
  //     .create(<Strength           
  //       alt='Award icon'
  //       heading='Decades of Experience'
  //       description='Pat has experience in multiple educational roles in his career, giving him a deep breadth of experience to draw from.'
  //     />)
  //     .toJSON()
    
  //   expect(tree).toMatchSnapshot()
  // })
})