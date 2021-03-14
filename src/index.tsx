import ReactDom from 'react-dom'
import EventComponent from './events/EventComponent'
const App = () => {
    return <div>
        <EventComponent />
    </div>
};

ReactDom.render(<App />, document.querySelector('#root'))