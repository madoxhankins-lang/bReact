import PropTypes from 'prop-types'
import styles from './App.module.css'

interface HeaderProps {
  title: string
}

interface FooterProps {
  text: string
}

interface ButtonProps {
  label: string
  onClick?: () => void
}

interface ListProps {
  title?: string
  items: string[]
}

interface GreetingCardProps {
  name: string
  age: number
  colors: string[]
  message?: string
  favoriteFood?: string
  hobby?: string
}

const Header = ({ title }: HeaderProps) => (
  <header className={styles.appHeader}>
    <h1>{title}</h1>
  </header>
)

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

const Footer = ({ text }: FooterProps) => <footer className={styles.appFooter}>{text}</footer>

Footer.propTypes = {
  text: PropTypes.string.isRequired,
}

const Button = ({ label, onClick }: ButtonProps) => (
  <button type="button" className={styles.actionButton} onClick={onClick}>
    {label}
  </button>
)

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
}

const List = ({ title, items }: ListProps) => (
  <div className={styles.listPanel}>
    {title && <h3>{title}</h3>}
    <ul className={styles.listItems}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  </div>
)

List.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
}

const GreetingCard = ({
  name,
  age,
  colors,
  message = 'Welcome to our site!',
  favoriteFood = 'pizza',
  hobby = 'reading',
}: GreetingCardProps) => {
  const firstColor = colors[0] || '#4f46e5'

  return (
    <article className={styles.greetingCard} style={{ backgroundColor: firstColor }}>
      <div className={styles.cardContent}>
        <p className={styles.eyebrow}>Member profile</p>
        <h2>Hello, {name}!</h2>
        <p>{message}</p>
        <div className={styles.metaRow}>
          <span>Age: {age}</span>
          <span>Favorite food: {favoriteFood}</span>
          <span>Hobby: {hobby}</span>
        </div>
        <div className={styles.colorList}>
          {colors.map((color) => (
            <span
              key={`${name}-${color}`}
              className={styles.colorSwatch}
              style={{ backgroundColor: color }}
              title={color}
            />
          ))}
        </div>
      </div>
    </article>
  )
}

GreetingCard.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  message: PropTypes.string,
  favoriteFood: PropTypes.string,
  hobby: PropTypes.string,
}

GreetingCard.defaultProps = {
  message: 'Welcome to our site!',
  favoriteFood: 'pizza',
  hobby: 'reading',
}

function App() {
  const colorGroups = [
    ['#4f46e5', '#818cf8', '#c7d2fe'],
    ['#0f766e', '#2dd4bf', '#99f6e4'],
  ]

  const featureList = ['Reusable components', 'Type-safe props', 'Responsive layout', 'Interactive button']

  const handleClick = () => {
    alert('The button was clicked!')
  }

  return (
    <div className={styles.appShell}>
      <Header title="React TypeScript Components" />

      <main className={styles.contentArea}>
        <section className={styles.cardGrid}>
          <GreetingCard
            name="Alicia"
            age={28}
            colors={colorGroups[0]}
            message="Thanks for visiting our site today!"
            favoriteFood="sushi"
            hobby="hiking"
          />

          <GreetingCard
            name="Marcus"
            age={35}
            colors={colorGroups[1]}
            message="Welcome back to the community!"
            favoriteFood="tacos"
            hobby="photography"
          />
        </section>

        <section className={styles.bottomPanel}>
          <div className={styles.buttonPanel}>
            <h3>Interactive action</h3>
            <Button label="Click Me" onClick={handleClick} />
          </div>

          <List title="Highlights" items={featureList} />
        </section>
      </main>

      <Footer text="Built with React, TypeScript, and reusable UI components." />
    </div>
  )
}

export default App
