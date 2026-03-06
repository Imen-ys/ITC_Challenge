import 'package:flutter/material.dart';
import 'package:pilly/constants.dart';
import 'package:pilly/provider/authentication_provider.dart';
import 'package:pilly/screens/landing_screen.dart';
import 'package:provider/provider.dart';

void main() {
  runApp( 
     ChangeNotifierProvider (
      create: (_) => AuthenticationProvider (),
      child: MyApp(),
    )
  );
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});
  
  @override
  Widget build(BuildContext context) {
    return  MaterialApp(
        title: 'Adaptive Theme Demo',
        debugShowCheckedModeBanner: false,
        initialRoute: Constants.landingScreen,
        routes: {
          Constants.landingScreen: (context) => const LandingScreen(),
        }
        
      );
}
}