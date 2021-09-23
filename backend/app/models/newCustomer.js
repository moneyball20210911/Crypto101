module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      address: String,
      email: String
      // values: Object,
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const NewCustomers = mongoose.model("users", schema);
  return NewCustomers;
};
