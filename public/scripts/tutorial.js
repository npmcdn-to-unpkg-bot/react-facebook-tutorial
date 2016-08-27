// tutorial 1
var CommentBox = React.createClass({
  getInitialState: function() {
    return {data: []};
  },

  render: function() {
    return (
    // tutorial 3/9
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.state.data} />
        <CommentForm />
      </div>
    );
  }
});

// tutorial 2
var CommentList = React.createClass({
  render: function() {
    // tutorial 10
    var commentNodes = this.props.data.map(function(comment) {
      return (
        <Comment author={comment.author} key={comment.id}>
          {comment.text}
        </Comment>
      );
    });
    return (
      // tutorial 5
      <div className="commentList">
        {commentNodes}
      </div>
    );
  }
});

var CommentForm = React.createClass({
  render: function() {
    return(
      <div className="commentForm">
        Hello, world! I am a CommentForm.
      </div>
    );
  }
});

// tutorial 4
// Comment is child of CommentList
var Comment = React.createClass({
  // tutorial 6/7 (add Markdown)
  rawMarkup: function() {
    var md = new Remarkable();
    var rawMarkup = md.render(this.props.children.toString());
    return { __html: rawMarkup };
  },

  render: function() {
    return(
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        <span dangerouslySetInnerHTML={this.rawMarkup()} />
      </div>
    );
  }
});

// tutorial 8
var data = [
  {id: 1, author: "Pete Hunt", text: "This is one comment"},
  {id: 2, author: "Jordan Walke", text: "This is *another* comment"}
];

// tutorial 11
ReactDOM.render(
  <CommentBox url="/api/comments" />,
  document.getElementById('content')
);