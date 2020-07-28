const fs = require('fs');
const spReq = JSON.parse(
  fs.readFileSync(
    `${__dirname}/../dev-data/data/spRequest.json`
  )
);
// exports.chechID = (req, res, next, val) => {
//   if (req.params.id * 1 > spReq.length) {
//     return res.status(404).json({
//       status: 'fail',
//       message: 'Updatimi nuk u krye! Pending',
//     });
//   }
//   next();
// };

exports.getAllRequests = (req, res) => {
  res.status(200).json({
    status: 'succes',
    data: {
      spReq,
    },
  });
};

exports.createRequest = (req, res) => {
  const newId = spReq[spReq.length - 1].id + 1;
  const newspReq = Object.assign(
    { id: newId },
    req.body
  );
  console.log(req.body);
  spReq.push(newspReq);
  fs.writeFile(
    `${__dirname}/dev-data/data/spRequest.json`,
    JSON.stringify(spReq),
    (err) => {
      res.status(201).json({
        status: 'success',
        data: {
          spReq: newspReq,
        },
      });
    }
  );
};

exports.getRequest = (req, res) => {
  const id = req.params.id * 1;
  const singleSPReq = spReq.find((el) => el.id === id);
  if (!singleSPReq) {
    return res.status(404).json({
      status: 'fail',
      message: 'Kjo kerkese nuk egziston!!',
    });
  }
  res.status(200).json({
    status: 'success',
    data: {
      singleSPReq,
    },
  });
};

exports.updateRequest = (req, res) => {
  if (req.params.id * 1 > spReq.length) {
    return res.status(404).json({
      status: 'fail',
      message: 'Updatimi nuk u krye! Pending',
    });
  }
  res.status(200).json({
    status: 'success',
    data: {
      singleSPReq: '<Updatimi nuk u krye! Pending>',
    },
  });
};

exports.deleteRequest = (req, res) => {
  if (req.params.id * 1 > spReq.length) {
    return res.status(404).json({
      status: 'fail',
      message: 'Fshija nuk u krye! Pending',
    });
  }
  res.status(200).json({
    status: 'success',
    data: null,
  });
};
