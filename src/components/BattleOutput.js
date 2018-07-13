import React from 'react'

function Output(props) {
  if (props.text !== '') {
    return (
      <div>
        <h2 className="heading-2">Battle Results!</h2>
        <pre className="BattleOutput">{props.text}</pre>
      </div>
    )
  }
  return null
}
class BattleOutput extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return <Output text={this.props.output} />
  }
}

module.exports = BattleOutput
