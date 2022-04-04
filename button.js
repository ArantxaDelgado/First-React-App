/* Un componente React creado en una funcion (functional component) 

# Cuando hagamos click en el boton, este va a tomar un color aleatorio RGB
  ## Voy a definir un estado para el boton que sea el color de fondo actual
  ## Queremos cambiar el color de fondo de toda la APP
*/
// Los componentes empiezan por maýusculas y usan notación Pascal Case. 
// Button, FormLogin, HeaderSearchBar

// Función flecha y desetructuración
//const Button = ({ changeColor, texto }) => {
function Button(props) {
    // button si dispone del evento onClick 
    return (<button onClick={props.changeColor}
        style={{ 'fontSize': '20px', 'backgroundColor': bgColor }}
        className='Btn'> {props.texto}
    </button>);
}

export default Button;