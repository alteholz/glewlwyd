import React, { Component } from 'react';
import i18next from 'i18next';

class Message extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: props.title,
      label: props.label,
      message: props.message
    }

    this.closeModal = this.closeModal.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      title: nextProps.title,
      label: nextProps.label,
      message: nextProps.message
    });
  }

  closeModal(e, result) {
    $("#messageModal").modal("hide");
  }
  
	render() {
    var messageJsx = [], labelJsx;
    if (this.state.label) {
      labelJsx = <h5>{this.state.label}</h5>;
    }
    if (this.state.message) {
      this.state.message.forEach((message, index) => {
        messageJsx.push(<li key={index}>{message}</li>);
      });
    }
		return (
    <div className="modal fade on-top" id="messageModal" tabIndex="-1" role="dialog" aria-labelledby="messageModalLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="messageModalLabel">{this.state.title}</h5>
            <button type="button" className="close" aria-label={i18next.t("modal.close")} onClick={(e) => this.closeModal(e, false)}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            {labelJsx}
            <ul>
              {messageJsx}
            </ul>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={(e) => this.closeModal(e, false)}>{i18next.t("modal.close")}</button>
          </div>
        </div>
      </div>
    </div>
		);
	}
}

export default Message;
