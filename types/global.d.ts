interface dropDown {
    text: string;
    href: string;
  }
interface News{
    imageNewsUrl: string
    releaseDate: string
    title: string
    description: string
    imageAuthor: string
    authorName: string
    categoryAuthor: string
}
interface TopNews extends News{}
interface ContentData{
    dropDownList: dropDown[]
    topNews: TopNews
    news: News[]
}
// props
interface NavbarProps{
    search: string
    setSearch: React.Dispatch<React.SetStateAction<string>>
  }