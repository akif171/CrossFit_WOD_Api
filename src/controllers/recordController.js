const recordService = require("../services/recordService");

const getRecordForWorkout = (req, res) => {
  const { workoutId } = req.params;

  if (!workoutId) {
    res.status(400).send({
      status: "FAILED",
      data: { error: "Parameter ':workoutId' can not be empty." },
    });
  }

  try {
    const record = recordService.getRecordForWorkout(workoutId);
    res.send({ status: "ok", data: record });
  } catch (error) {
    res
      .status({ status: error?.status || 500 })
      .send({ data: error?.message || error });
  }
};

module.exports = { getRecordForWorkout };
