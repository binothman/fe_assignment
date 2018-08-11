/*
* Header Component
*/
import React from 'react'
import { Grid, Image, Input } from 'semantic-ui-react'

// header stylesheet
import './header.css'

const Header = () => (
  <div className="top-header">
    <Grid divided='vertically'>
      <Grid.Row columns={2}>
        <Grid.Column>
          <Image src='/assets/img/logo.png' />
        </Grid.Column>
        <Grid.Column>
          <div className="right-text relative">
            <div className="header-search">
              <Input
                icon='search'
                placeholder='Search...'
                className="search"
              />
            </div>
          </div>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </div>
)

export default Header
