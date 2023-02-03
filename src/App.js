import Header from './Header'
import alanBtn from '@alan-ai/alan-sdk-web'
import { useEffect, useState } from 'react'
import { Data } from './Data'
import Card from './Card'
import Footer from './Footer'
import Preheader from './Preheader'
import Imageslider from './Imageslider'

function App() {
  const [category, setCategory] = useState([])
  useEffect(() => {
    alanBtn({
      key:
        '4d471c7f04902551d05f5f7af8fe12562e956eca572e1d8b807a3e2338fdd0dc/stage',
      onCommand: ({ command }) => {
        if (command === 'shoe') {
          filter('shoe')
        }
        if (command === 'shirt') {
          filter('shirt')
        }
        if (command === 'sandal') {
          filter('sandal')
        }
        if (command === 'pant') {
          filter('pant')
        }
        if (command === 'skirt') {
          filter('skirt')
        }
        if (command === 'short') {
          filter('short')
        }
      },
    })
    filter('')
  }, [])

  const filter = (names) => {
    const filtered = Data.filter((item) => item.name.includes(names))
    console.log(filtered)
    setCategory(filtered)
  }
  return (
    <div className="App">
      <Preheader />
      <Header />
      <Imageslider/>
      {
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {category.map((item) => (
            <Card
              image={item.image}
              name={item.name}
              rating={item.rating}
              actualPrice={item.actualPrice}
              offerPrice={item.offerPrice}
            />
          ))}
        </div>
      }
      <Footer />
    </div>
  )
}

export default App
