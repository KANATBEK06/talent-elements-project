import LessonsCard from './components/UI/LessonsCard'

const lesson = [
  {
    img: 'https://www.devopsschool.com/blog/wp-content/uploads/2022/03/java_logo_icon_168609.png',
    title: 'уроки JAVA 5',
  },
  {
    img: 'https://nyesteventuretech.com/images/django-development.png',
    title: 'уроки DJANGO 5',
  },
  {
    img: 'https://miro.medium.com/v2/resize:fit:2000/1*6ahbWjp_g9hqhaTDSJOL1Q.png',
    title: 'уроки JS 5',
  },
]
function App() {
  return (
    <div>
      <LessonsCard group={lesson} />
    </div>
  )
}

export default App
