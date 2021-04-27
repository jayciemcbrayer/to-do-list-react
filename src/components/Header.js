import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title, onAdd, showAdd}) => {

  return (
    <>
      <header className="header">
        <h1>{title}</h1>   
        <Button
          color={showAdd ? "red" : "#071a07"}
          text={showAdd ? "Close" : "Add"}
          onAdd={onAdd}
        />
      </header>
    </>
  )
}

Header.defaultProps = {
  title: "Default"
}

Header.propTypes = {
  title: PropTypes.string
}

// const HeadingStyle = {
//   backgroundColor: "black",
//   color: "green",                  //INLINE CSS EXAMPLE
//   textAlign: "center"
// }
export default Header