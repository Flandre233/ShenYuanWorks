const { BlogPost } = require('./02-blogpost')
class Blog {
  constructor() {
    this.blogList = []
  }
  add(blog) {
    this.blogList.push(blog)
  }
  delete(int) {
    this.blogList.splice(int, 1)
  }
  update(int, blogPost) {
    this.blogList[int] = blogPost
  }
  toString() {
    return this.blogList.map(x => x.toString()).join('\n')
  }
}

const blog = new Blog()
blog.add(new BlogPost('John Doe', 'Lorem Ipsum', 'Lorem ipsum dolor sit amet.', '2000.05.04'))
blog.add(new BlogPost('Tim Urban', 'Wait but why',
  'A popular long-form, stick-figure-illustrated blog about almost everything.', '2010.10.10'))
blog.add(new BlogPost('William Turton', 'One Engineer Is Trying to Get IBM to Reckon With Trump',
  'Daniel Hanley, a cybersecurity engineer at IBM, doesn’t want to be the center of attention. When I asked to take his picture outside one of IBM’s New York City offices, he told me that he wasn’t really into the whole organizer profile thing.',
  '2017.03.28'))
console.log(String(blog))
blog.delete(0)
console.log('=============')
console.log(String(blog))
blog.update(0, new BlogPost('John Doe', 'Lorem Ipsum', 'Lorem ipsum dolor sit amet.', '2000.05.04'))
console.log('=============')
console.log(String(blog))