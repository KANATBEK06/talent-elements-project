import Header from './components/UI/Header'

import SiderBar from './components/UI/side-bar/SiderBar'

function App() {
  const data = [
    {
      title: 'nbgjkg',
      group: 'jvjxj',
    },
  ]
  return (
    <div>
      <Header data={[]} />
      <SiderBar variant='user' data={data} />
    </div>
  )
}

export default App
