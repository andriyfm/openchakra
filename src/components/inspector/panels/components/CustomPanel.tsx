import React, { memo } from 'react'
import SizeControl from '~components/inspector/controls/SizeControl'
import ChildrenControl from '~components/inspector/controls/ChildrenControl'
import usePropsSelector from '~hooks/usePropsSelector'

const CustomPanel = () => {
  //   const size = usePropsSelector('size')

  return (
    <>
      <ChildrenControl />

      {/* <SizeControl name="size" label="Size" value={size} /> */}
    </>
  )
}

export default memo(CustomPanel)
