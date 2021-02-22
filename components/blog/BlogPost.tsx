import React, { FunctionComponent } from 'react'
import { BlogTitle } from './BlogTitle'
import { BlogDate } from './BlogDate'
import { BlogHr } from './BlogHr'
import { LinkToSearch } from './LinkToSearch'

type Props = {
  titleText: string,
  date: string
}

export const BlogPost: FunctionComponent<Props> = React.memo(({
  titleText, date, children,
}) => (
  <div style={{
    marginTop: 50, marginBottom: 50, marginLeft: 20, marginRight: 20,
  }}
  >
    <BlogTitle titleText={titleText} />
    <BlogDate date={date} />
    {children}
    <BlogHr />
    <LinkToSearch />
  </div>
))
