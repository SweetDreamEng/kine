import React from 'react'
import { IconGallery } from 'storybook-icon-gallery'
import { Fire } from './index'
import { Hashtag } from './index'
import { Pen } from './index'
import { Shop } from './index'
import { Stats } from './index'

export default {
  title: 'All Icons',
};

export const Icons = () => {
  return (
    <div style={{ padding: '100px', background: '#F0F0F0' }} >
      <IconGallery>
        <IconGallery.Variants name="Fire">
          <IconGallery.Variant>
            <Fire height="50px" width="50px" className="icon" />
          </IconGallery.Variant>
        </IconGallery.Variants>
        <IconGallery.Variants name="Hashtag">
          <IconGallery.Variant>
            <Hashtag height="50px" width="50px" className="icon" />
          </IconGallery.Variant>
        </IconGallery.Variants>
        <IconGallery.Variants name="Pen">
          <IconGallery.Variant>
            <Pen height="50px" width="50px" className="icon" />
          </IconGallery.Variant>
        </IconGallery.Variants>
        <IconGallery.Variants name="Shop">
          <IconGallery.Variant>
            <Shop height="50px" width="50px" className="icon" />
          </IconGallery.Variant>
        </IconGallery.Variants>
        <IconGallery.Variants name="Stats">
          <IconGallery.Variant>
            <Stats height="50px" width="50px" className="icon" />
          </IconGallery.Variant>
        </IconGallery.Variants>
      </IconGallery>
    </div>
  )
}
