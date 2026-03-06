
import 'dart:convert';
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';
import 'package:pilly/constants.dart';
import 'package:pilly/models/user_model.dart';
import 'package:shared_preferences/shared_preferences.dart';
class AuthenticationProvider extends ChangeNotifier {

  
  // _isLoading indicates whether an operation is currently in progress (e.g., an API call or database query).
  // It is initially set to false cz no operation is happening when the object is first created.
  bool _isLoading = false;

  // _isSuccessful represents the status of an operation (e.g., whether an authentication attempt was successful).
  // It is initially set to false, assuming the operation has not been successful yet.
  bool _isSuccessful = false;

  // _uid holds the unique identifier (UID) of the user. 
  // It is nullable (String?) cz at first, the UID may not be available until the user is logged in or authenticated.
  //(نخدمو بيها بزاف و  مشي كل مرة نعاودو  نحوسو عليها داخل المودل )
  String? _uid;

  // _userModel holds the user's complete information, encapsulated in the UserModel object.
  // It is nullable (UserModel?) cz it may not be populated until the user's data is fetched from a database or an API.
  UserModel? _userModel;



  // Getters for private fields
  bool get isLoading => _isLoading;
  bool get isSuccessful => _isSuccessful;
  String? get uid => _uid;
  UserModel? get userModel => _userModel;

  // Shortcuts for Firebase services
  final FirebaseAuth _auth = FirebaseAuth.instance;
  final FirebaseFirestore _firestore = FirebaseFirestore.instance;


  // save user data to shared preferences
  Future<void> saveUserDataToSharedPreferences() async {
    SharedPreferences sharedPreferences = await SharedPreferences.getInstance();
    await sharedPreferences.setString(
        Constants.userModel, jsonEncode(userModel!.toMap()));
  }

  // get data from shared preferences
  Future<void> getUserDataFromSharedPreferences() async {
    SharedPreferences sharedPreferences = await SharedPreferences.getInstance();
    String userModelString =
        sharedPreferences.getString(Constants.userModel) ?? '';
    _userModel = UserModel.fromMap(jsonDecode(userModelString));
    _uid = _userModel!.uid;
    notifyListeners();
  }

  
  }