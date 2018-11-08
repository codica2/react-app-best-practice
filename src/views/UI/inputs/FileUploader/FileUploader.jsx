import React, { Component } from "react";
import axios from "axios";
import { Loader } from "semantic-ui-react";
import { change } from "redux-form";
import Dropzone from "react-dropzone";

import StyledUploader from "./StyledUploader";

import { PORT, deleteFile } from "@utilities";

class FileUploader extends Component {
  state = {
    files: [],
    error: false,
    loading: false
  };

  fileHub = [];

  componentWillMount() {
    if (this.props.input.value) {
      this.setState({
        files: this.props.input.value
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.input.value) {
      this.setState({
        files: nextProps.input.value
      });
    }

    if (!nextProps.onSelfSubmit) {
      if (nextProps.submitSucceeded) {
        this.state.files.forEach(file => {
          if (file.id && file.status && file.status === "delete") {
            this.deleteAttachedFile(file.id);
          }
        });
      }
    }
  }

  validateFileExtension = fld => {
    if (
      !/(\.txt|\.rtf|\.doc|\.docx|\.html|\.pdf|\.odt|\.psd|\.jpg|\.zip|\.png|\.jpeg|\.xlsx|\.csv)$/i.test(
        fld
      )
    ) {
      this.setState({ error: true });
      return false;
    }

    this.setState({ error: false });
    return true;
  };

  _handleFileAttach(e) {
    e.preventDefault();

    let files = e.target.files;

    this.onDrop(files);
  }

  returnFileName(name) {
    if (name.length > 12) {
      return name.slice(0, 9) + "...";
    } else return name;
  }

  returnFileSize(number) {
    if (number < 1024) {
      return number + "bytes";
    } else if (number > 1024 && number < 1048576) {
      return (number / 1024).toFixed(1) + "KB";
    } else if (number > 1048576) {
      return (number / 1048576).toFixed(1) + "MB";
    }
  }

  onDrop = files => {
    if (files.length < 1) {
      this.setState({ error: true });
    } else {
      this.setState({ error: false });
    }

    for (let file of files) {
      const {
        onSelfSubmit,
        entity_type,
        input,
        meta: { dispatch, form }
      } = this.props;
      if (!this.validateFileExtension(file.name)) {
        return false;
      }

      let reader = new FileReader();
      this.setState({ loading: true });

      reader.onloadend = () => {
        if (onSelfSubmit) {
          onSelfSubmit(input.name + "_attributes", [
            {
              document: reader.result,
              title: file.name,
              size: file.size,
              entity_type
            }
          ])
            .then(data => {
              this.setState({ loading: false });
            })
            .catch(error => {
              console.error(error);
              this.setState({ loading: false, error });
            });
        } else {
          this.fileHub = [
            ...this.fileHub,
            { document: reader.result, title: file.name, size: file.size }
          ];
          this.setState({
            files: [...this.state.files, file],
            loading: false
          });
          dispatch(change(form, "file", this.fileHub));
        }
      };

      reader.readAsDataURL(file);
    }
  };

  handleDeleteFile = (id, name, status) => {
    const {
      meta: { dispatch, form },
      onSelfSubmit,
      selfSubmit
    } = this.props;
    let data = this.state.files.slice(),
      index;

    if (id) {
      index = data.findIndex(file => file.id === id);
    }

    if (name) {
      index = data.findIndex(file => file.name === name);
    }

    data.splice(index, 1);

    if (onSelfSubmit || selfSubmit) {
      this.deleteAttachedFile(id);
    } else {
      this.fileHub.splice(index, 1);
      dispatch(change(form, "file", this.fileHub));
    }

    this.setState({
      files: data
    });
  };

  getFileExtension = file => {
    let filetype;
    if (file.name) {
      filetype = file.name.split(".").pop();
    } else if (file.document) {
      if (file.document.url) {
        filetype = file.document.url.split(".").pop();
      }
    }

    switch (filetype) {
      case "doc":
      case "docx":
        return "-word";
      case "html":
        return "-code";
      case "zip":
        return "-archive";
      case "jpg":
      case "jpeg":
      case "png":
        return "-image";
      case "pdf":
        return "-pdf";
      case "xlsx":
      case "csv":
        return "-excel";
      default:
        return "-alt";
    }
  };

  deleteAttachedFile = file => {
    const {
      onSelfSubmit,
      selfSubmit,
      meta: { dispatch }
    } = this.props;
    this.setState({ loading: true });

    return axios
      .delete(`${PORT}/api/v1/attached_files/${file}`)
      .then(res => {
        this.setState({ loading: false });

        if (onSelfSubmit || selfSubmit) {
          dispatch(deleteFile(res));
        }
      })
      .catch(error => {
        console.error(error);
        this.setState({ loading: false });
      });
  };

  downloadFile = file => {
    let fileName = file.document.url.split("/").pop();

    return axios({
      url: `${PORT}/api/v1/attached_files/${file.id}/download`,
      method: "POST",
      responseType: "blob"
    })
      .then(res => {
        this.getFile(fileName, res);
      })
      .catch(error => console.error(error));
  };

  getFile = (fileName, res) => {
    let link = document.createElement("a");
    link.href = window.URL.createObjectURL(res.data);
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  render() {
    const {
      input,
      placeholder,
      label,
      name,
      disabled,
      padded,
      dropzone,
      className,
      onSelfSubmit,
      ...rest
    } = this.props;

    return (
      <StyledUploader
        dropzone={dropzone}
        padded={padded}
        className={className}
        {...rest}
      >
        <label>{label}</label>
        <span />

        {dropzone && !disabled && (
          <Dropzone
            className="dropzone"
            activeClassName="active"
            onDrop={this.onDrop}
            accept=".pdf, .doc, .docx, .xlsx, .txt, .csv, .rtf, .html, .odt, .psd, .jpg, .jpeg, .zip, .png"
          >
            <span className="dropzone-label">
              Drag and drop or choose your files
            </span>
          </Dropzone>
        )}

        {this.state.files.map((file, key) => (
          <div
            key={key}
            className={`filePreview${onSelfSubmit ? " active" : ""}`}
          >
            <div
              className="fileIcon"
              onClick={() =>
                onSelfSubmit &&
                file.document &&
                file.document.url &&
                this.downloadFile(file)
              }
            >
              <i className={`far fa-file${this.getFileExtension(file)}`} />
            </div>
            <div className="fileInfo">
              <p className="fileName">
                {file.name && this.returnFileName(file.name)}
                {file.document &&
                  file.document.url &&
                  this.returnFileName(file.document.url.split("/").pop())}
              </p>
              <p className="fileSize">
                {file.size
                  ? this.returnFileSize(file.size)
                  : this.returnFileSize(0)}
              </p>
            </div>
            {!disabled && (
              <div
                className="file-delete"
                onClick={() =>
                  this.handleDeleteFile(file.id, file.name, "delete")
                }
              >
                <i className="fas fa-times" />
              </div>
            )}
          </div>
        ))}
        <Loader
          style={{ display: this.state.loading ? "block" : "none" }}
          inline
          inverted
          disabled={!this.state.loading}
        />

        {!dropzone && !disabled && (
          <button
            type="button"
            className="uploadFile"
            onClick={this.handleTrigger}
          />
        )}
        <input
          ref={this.triggerRef}
          name={input.name + "2"}
          disabled={disabled}
          placeholder={placeholder}
          type="file"
          multiple
          accept=".pdf, .doc, .docx, .xlsx, .txt, .csv, .rtf, .html, .odt, .psd, .jpg, .jpeg, .zip, .png"
          onChange={e => this._handleFileAttach(e)}
        />

        {this.state.error ? (
          <div className="errorMessage">
            <span>
              Invalid file type. <br />
              Allowed file extensions: .pdf, .doc, .docx, .xlsx, .txt, .csv,
              .rtf, .html, .odt, .psd, .jpg, .jpeg, .zip, .png
            </span>
          </div>
        ) : null}
      </StyledUploader>
    );
  }

  triggerRef = ref => {
    this.container = ref;
  };

  handleTrigger = ev => {
    ev.preventDefault();
    this.container.click();
  };
}

export default FileUploader;
