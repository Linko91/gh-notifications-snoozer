const React = require('react')
const Filters = require('../../models/filters')

class TopNavigation extends React.Component {
  changeFilter(event) {
    this.props.changeFilter(event.target.value)
  }

  refresh(event) {
    event.currentTarget.blur() // defocus button
    const filter = document.getElementById('filters-menu').value
    this.props.changeFilter(filter)
  }

  render() {
    const rules = Filters.findAll()
    return (
      <div className="top-navigation columns">
        <div className="column is-10">
          <label className="label" htmlFor="filters-menu">Filter:</label>
          <span className="select">
            <select id="filters-menu" onChange={event => this.changeFilter(event)}>
              {rules.map(key => (
                <option key={key} value={key}>{key}</option>
              ))}
            </select>
          </span>
          <button
            onClick={e => this.refresh(e)}
            type="button"
            title="Refresh list"
            className="is-link button"
          >
            <span className="octicon octicon-sync"></span>
          </button>
        </div>
        <div className="column is-2 has-text-right">
          <button
            onClick={this.props.manageFilters}
            type="button"
            className="is-link button"
            title="Manage filters"
          ><span className="octicon octicon-three-bars"></span></button>
          <button
            onClick={this.props.addFilter}
            type="button"
            className="is-link button"
            title="Add a filter"
          ><span className="octicon octicon-plus"></span></button>
        </div>
      </div>
    )
  }
}

TopNavigation.propTypes = {
  addFilter: React.PropTypes.func.isRequired,
  changeFilter: React.PropTypes.func.isRequired,
  manageFilters: React.PropTypes.func.isRequired,
}

module.exports = TopNavigation
