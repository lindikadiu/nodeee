const multer = require('multer');
const SPRequest = require('./../models/spRequestModel');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('../utils/appError');

// const multerStorage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, './public/img');
//   },
//   filename: (req, file, cb) => {
//     const ext = file.mimetype.split('/')[1];
//     const fName = file.originalname.split('.')[0];
//     cb(null, `DP-${fName}-${Date.now()}.${ext}`);
//   },
// });

// const multerFilter = (req, file, cb) => {
//   if (file.mimetype.startsWith('image')) {
//     cb(null, true);
//   } else {
//     cb(
//       new AppError('File is not an image!', 400),
//       false
//     );
//   }
// };
// const upload = multer({
//   storage: multerStorage,
//   fileFilter: multerFilter,
// });

// exports.drivePermit = upload.single('driveUrl');

//get all Spare Part Request

exports.getAllRequests = catchAsync(
  async (req, res, next) => {
    const spReqs = await SPRequest.find();

    res.status(200).json({
      status: 'succes',
      data: {
        spReqs,
      },
    });
  }
);

//create new Spare Part Request

exports.createRequest = catchAsync(
  async (req, res, next) => {
    const newspReq = await SPRequest.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        spReq: newspReq,
      },
      message: 'Data saved Succesfully!',
    });
  }
);

//get single Spare Part Request

exports.getRequest = catchAsync(
  async (req, res, next) => {
    const spReq = await SPRequest.findById(
      req.params.id
    );
    if (!spReq) {
      return next(
        new AppError(
          'Spare Part Request does not exist!',
          404
        )
      );
    }

    res.status(200).json({
      status: 'success',
      data: {
        spReq,
      },
    });
  }
);

//update Spare Part Request

exports.updateRequest = catchAsync(
  async (req, res, next) => {
    const spReq = await SPRequest.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        // runValidators:true
      }
    );

    if (!spReq) {
      return next(
        new AppError(
          'Spare Part Request does not exist!',
          404
        )
      );
    }
    res.status(200).json({
      status: 'success',
      data: {
        spReq,
      },
    });
  }
);

//delete Spare Part Request

exports.deleteRequest = catchAsync(
  async (req, res, next) => {
    const spReq = await SPRequest.findByIdAndDelete(
      req.params.id
    );

    if (!spReq) {
      return next(
        new AppError(
          'Spare Part Request does not exist!',
          404
        )
      );
    }

    return res.status(204).json({
      status: 'success',
      data: null,
    });
  }
);

//     Spare Part Request
