Template.yrbook.events({
  'click [data-modal-show]': function (e,t) {
    var id = $(e.currentTarget).attr('data-modal-show');
    $('#' + id).modal('show');
  }
});