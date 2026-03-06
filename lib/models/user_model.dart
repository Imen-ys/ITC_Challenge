import 'package:pilly/constants.dart';
import 'package:cloud_firestore/cloud_firestore.dart';

class UserModel {
  String uid;
  String firstName;
  String lastName;
  String email;
  String phone;
  String userType;
  DateTime dateOfBirth;
  PatientDetails patientDetails;

  UserModel({
    required this.uid,
    required this.firstName,
    required this.lastName,
    required this.email,
    required this.phone,
    required this.userType,
    required this.dateOfBirth,
    required this.patientDetails,
  });

  factory UserModel.fromMap(Map<String, dynamic> map) {
    return UserModel(
      uid: map[Constants.uid] ?? '',
      firstName: map[Constants.firstName] ?? '',
      lastName: map[Constants.lastName] ?? '',
      email: map[Constants.email] ?? '',
      phone: map[Constants.phone] ?? '',
      userType: map[Constants.userType] ?? '',
      dateOfBirth: (map[Constants.dateOfBirth] as Timestamp).toDate(),
      patientDetails: PatientDetails.fromMap(map[Constants.patientDetails] ?? {}),
    );
  }

  Map<String, dynamic> toMap() {
    return {
      Constants.uid: uid,
      Constants.firstName: firstName,
      Constants.lastName: lastName,
      Constants.email: email,
      Constants.phone: phone,
      Constants.userType: userType,
      Constants.dateOfBirth: dateOfBirth,
      Constants.patientDetails: patientDetails.toMap(),
    };
  }
}

class PatientDetails {
  String emergencyContactName;
  String emergencyContactNumber;
  String medicalHistory;

  PatientDetails({
    required this.emergencyContactName,
    required this.emergencyContactNumber,
    required this.medicalHistory,
  });

  factory PatientDetails.fromMap(Map<String, dynamic> map) {
    return PatientDetails(
      emergencyContactName: map[Constants.emergencyContactName] ?? '',
      emergencyContactNumber: map[Constants.emergencyContactNumber] ?? '',
      medicalHistory: map[Constants.medicalHistory] ?? '',
    );
  }

  Map<String, dynamic> toMap() {
    return {
      Constants.emergencyContactName: emergencyContactName,
      Constants.emergencyContactNumber: emergencyContactNumber,
      Constants.medicalHistory: medicalHistory,
    };
  }
}
