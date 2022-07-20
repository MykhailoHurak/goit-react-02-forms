import React from 'react';
import './TodoEditor.css';

class TodoEditor extends React.Component {
    state = {
        textarea: '',
    }

    handleChange = (event) => {
        this.setState({ textarea: event.currentTarget.value })
    };

    handleSubmit = (event) => {
        event.preventDefault();

        console.log(this.state);

        this.props.onSubmit(this.state.textarea);

        this.setState({ textarea: '' });
    };

    render() {
        return (
            <form
                className='TodoEditor'
                onSubmit={this.handleSubmit}
            >
                <textarea
                    value={this.state.textarea}
                    onChange={this.handleChange}
                    className='TodoEditor__textarea'
                ></textarea>
                <button
                    type='submit'
                    className='TodoEditor__buttonAdd'
                >+ Add</button>
            </form>
        );
    }
};

export default TodoEditor;