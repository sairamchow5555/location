# GPS Location using ReactNative

![1](https://github.com/sairamchow5555/location/assets/126855559/074352ad-6d81-4278-8cf9-87460a032063)

![2](https://github.com/sairamchow5555/location/assets/126855559/ae7e370f-91b3-4ff1-897d-39b1b958dd0c)

# Step1: Android
To request access to location, you need to add the following line to your app's AndroidManifest.xml:
```
<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />

or

<uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
```

Inside the application element, add the following meta-data element
```
<application
   ...>
   <meta-data
        android:name="com.google.android.geo.API_KEY"
        android:value="YOUR_API_KEY_HERE"
   />
</application>
```

# Step2: Replace "YOUR_API_KEY_HERE" with your actual Google Maps API key.
   a. Go to the Google Cloud Console: Visit the Google Cloud Console at https://console.cloud.google.com/.

   b. Create a New Project (if necessary): If you haven't created a project yet, click on the project dropdown menu at the top of the page and select "New Project". Follow the prompts to create a new project and give it a name.

   c. Enable the Maps JavaScript API: Once your project is created (or if you already have a project), click on the "Enable APIs and Services" button.

   d. Find and Enable the Maps JavaScript API: In the search bar, type "Maps JavaScript API" and click on it in the results. Then, click the "Enable" button to enable the API for your project.

   e. Create Credentials: After enabling the API, go to the "Credentials" section on the left sidebar.

   f. Create an API Key: Click on the "Create credentials" dropdown and select "API key". This will generate a new API key for you.

   g. Restrict the API Key (Optional): For security reasons, it's recommended to restrict your API key. You can restrict it by HTTP referrer, IP address, or mobile app. This helps prevent unauthorized use of your key.

   h. Copy Your API Key: Once you've created your API key, copy it and paste it into your application code where it says "YOUR_API_KEY_HERE".


Remember to keep your API key secure and never share it publicly, as it can be used to access your Google Cloud resources and you may incur charges if it's misused.
