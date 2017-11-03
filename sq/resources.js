define({
  root: ({
    map: {
      error: "Krijimi i hartës i pamundur"
    },
    onlineStatus: {
      offline: "Për momentin jeni offline. Formularët do të ruhen derisa të ktheheni në rrjet.",
      reconnecting: "Reconnecting&hellip;",
      pending: "${total} pending edit(s) will be submitted when a network connection is re-established."
    },
    configure: {
      mapdlg: {
        items: {
          organizationLabel: "Organizata Ime",
          onlineLabel: "ArcGIS Online",
          contentLabel: "My Content",
          favoritesLabel: "My Favorites"
        },
        title: "Zgjedh Hartën",
        searchTitle: "Kërko",
        ok: "Ok",
        cancel: "Anulo",
        placeholder: "Enter search term"
      },
      groupdlg: {
        items: {
          organizationLabel: "My Organization",
          onlineLabel: "ArcGIS Online",
          contentLabel: "My Content",
          favoritesLabel: "My Favorites"
        },
        title: "Select Group",
        searchTitle: "Search",
        ok: "Ok",
        cancel: "Cancel",
        placeholder: "Enter search term"
      },
      sharedlg: {
        items: {},
        mailtoLinkDescription: "Here is a link to a GeoForm"
      }
    },
    user: {
      all: "All",
      mgrs: "MGRS",
      usng: "USNG",
      utm: "UTM",
      utm_northing: "Northing",
      utm_easting: "Easting",
      utm_zone_number: "Zone Number",
      selectLayerTabText: "${formSection} Select Form",
      geoFormGeneralTabText: "${formSection} Fut Informacionin",
      locationInformationText: "${formSection} Zgjedh Lokacionin",
      submitInformationText: "${formSection} Kompleto Kërkesën",
      submitInstructions: "Shto këtë informatë në hartë.",
      myLocationText: "Current Location",
      locationDescriptionForMoreThanOneOption: "Specify the location for this entry by clicking/tapping the map or by using one of the following options.",
      locationDescriptionForOneOption: "Specify the location for this entry by clicking/tapping the map or by using the following option.",
      locationDescriptionForNoOption: "Specify the location for this entry by clicking/tapping the map.",
      addressText: "Search",
      geographic: "Lat/Lon",
      locationTabText: "Location",
      locationPopupTitle: "Location",
      submitButtonText: "Submit Entry",
      submitButtonTextLoading: "Submitting&hellip;",
      formValidationMessageAlertText: "The following fields are required:",
      selectLocation: "Please select a location for your submission.",
      emptylatitudeAlertMessage: "Please enter a ${openLink}latitude${closeLink} coordinate.",
      emptylongitudeAlertMessage: "Please enter a ${openLink}longitude${closeLink} coordinate.",
      shareUserTitleMessage: "Thank you for your contribution!",
      entrySubmitted: "Your entry has been submitted to the map.",
      shareThisForm: "Share This Form",
      shareUserTextMessage: "Tell others to contribute using the following options.",
      addAttachmentFailedMessage: "Unable to add attachment to layer",
      addFeatureFailedMessage: "Unable to add feature to layer",
      noLayerConfiguredMessage: "An error occurred loading or finding an editable feature layer. In order to display the form and start collecting submissions, add an editable Feature Layer to the Webmap.",
      placeholderLatitude: "Latitude (Y)",
      placeholderLongitude: "Longitude (X)",
      latitude: "Latitude",
      longitude: "Longitude",
      findMyLocation: "Locate Me",
      finding: "Locating&hellip;",
      backToTop: "Back to top",
      addressSearchText: "Your submission will appear here. You can drag the pin to correct the location.",
      shareModalFormText: "Form Link",
      close: "Close",
      locationNotFound: "Location could not be found.",
      setLocation: "Set Location",
      find: "Find address or place",
      attachment: "Attachment",
      toggleDropdown: "Toggle Dropdown",
      invalidString: "Please enter a valid value.",
      invalidSmallNumber: "Please enter a valid ${openStrong}integer${closeStrong} value between -32768 and 32767.",
      invalidNumber: "Please enter valid ${openStrong}integer${closeStrong} value between -2147483648 and 2147483647.",
      invalidFloat: "Please enter valid ${openStrong}floating point${closeStrong} value.",
      invalidDouble: "Please enter valid ${openStrong}double${closeStrong} value.",
      invalidLatLong: "Please enter valid latitude and longitude coordinates.",
      invalidUTM: "Please enter valid UTM coordinates.",
      invalidUSNG: "Please enter valid USNG coordinates.",
      invalidMGRS: "Please enter valid MGRS coordinates.",
      geoformTitleText: "GeoForm",
      domainDefaultText: "Select&hellip;",
      applyEditsFailedMessage: "A submission error occurred.",
      applyEditsFailedRobot: "Submission was rejected because it failed robot detection.",
      applyEditsAuthError: "Your entry cannot be submitted due to your user level type. Please contact your organization administrator for further assistance.",
      requiredFields: "The following field is required. Please provide a valid entry.",
      requiredField: "(required)",
      error: "Error",
      textRangeHintMessage: "${openStrong}Hint:${closeStrong} Minimum value ${minValue} and Maximum value ${maxValue}",
      dateRangeHintMessage: "${openStrong}Hint:${closeStrong} Minimum Date ${minValue} and Maximum Date ${maxValue}",
      remainingCharactersHintMessage: "${value} characters remaining",
      mapFullScreen: "Full Screen",
      mapRestore: "Restore",
      filterSelectEmptyText: "Select",
      invalidLayerMessage: "A valid layer to create the GeoForm was not found. If the GeoForm has been configured with a layer, the layer may no longer be available, or authorization failed.",
      selectedLayerText: "All",
      fileUploadStatus: "File Upload Status",
      uploadingBadge: "&nbsp;Uploading&hellip;",
      successBadge: "&nbsp;Uploaded",
      retryBadge: "Retry",
      errorBadge: "Error uploading&nbsp;&nbsp;&nbsp;",
      fileTooLargeError: "File too large to attach",
      exceededFileCountError: "Exceeded maximum number of attachments allowed",
      selectFileTitle: "Select a file",
      btnSelectFileText: "Select File",
      btnViewSubmissions: "View Submissions"
    },
    builder: {
      gettingStarted: "Getting Started",
      dateSettings: "Date Settings",
      hiddenDateField: "Hide this date field",
      preventPastDates: "Prevent past dates",
      preventFutureDates: "Prevent future dates",
      useCurrentDate: "Set this field with the current date and time",
      configure: "Configure",
      configureField: "Configure Field '${fieldName}'",
      invalidUser: "Sorry, you don't have permission to view this item",
      invalidWebmapSelectionAlert: "The selected webmap does not contain a valid layer to use. Please add an editable FeatureLayer into your webmap to continue.",
      invalidWebmapSelectionAlert2: "For More Information please refer to ${openLink}What is Feature Service?${closeLink}",
      selectFieldsText: "Select Form Fields",
      selectThemeText: "Select Form Theme",
      setViewerText: "Configure Viewer",
      introText: "Start",
      webmapText: "Webmap",
      layerText: "Layer",
      detailsText: "Details",
      fieldsText: "Fields",
      styleText: "Style",
      viewerText: "Viewer",
      optionText: "Options",
      previewText: "Preview",
      publishText: "Publish",
      optionsApplicationText: "Options",
      submitButtonText: "Submit Button Text (Optional)",
      submitButtonDesc: "Optionally label the button to submit a new entry. This text will not be translated.",
      viewSubmissionsText: "View Submissions Text (Optional)",
      viewSubmissionsDesc: "Optionally label the button to view existing entries. This text will not be translated.",
      titleText: "Builder",
      descriptionText: "GeoForm is a configurable template for form-based data editing of a ${link1}Feature Service${closeLink}. This application allows users to enter data through a form instead of a map’s pop-up while leveraging the power of the ${link2}Web Map${closeLink} and editable Feature Services. Use the following steps to customize and deploy your GeoForm.",
      btnPreviousText: "Previous",
      btnNextText: "Next",
      webmapTabTitleText: "Select a Webmap",
      viewWebmap: "View webmap",
      webmapDetailsText: "The selected webmap is ${webMapTitleLink}${webMapTitle}${closeLink}. To select a different webmap please click on 'Choose Webmap' button",
      btnSelectWebmapText: "Choose Webmap",
      btnSelectWebmapTextLoading: "Loading&hellip;",
      layerTabTitleText: "Select Editable Layer(s)",
      selectLayerLabelText: "Layer",
      selectLayerDefaultOptionText: "Select Layer",
      enableBasemapToggle: "Show Basemap Toggle",
      enableBasemapToggleDescription: "You can configure the GeoForm to Show/Hide the Basemap Toggle",
      defaultBasemap: "Basemap Toggle",
      secondaryBasemap: "Default Basemap",
      detailsTabTitleText: "Form Details",
      detailTitleLabelText: "Title",
      detailLogoLabelText: "Logo Image",
      descriptionLabelText: "Form Instructions & Details",
      fieldDescriptionLabelText: "Help Text (optional)",
      fieldDescriptionHelpText: "Provide a short description or instructions for this field.",
      fieldHintHelpText: "Placeholder text for the field.",
      fieldTabFieldHeaderText: "Field",
      fieldTabLabelHeaderText: "Label",
      fieldTabDisplayTypeHeaderText: "Display As",
      fieldTabOrderColumnText: "Order",
      fieldTabVisibleColumnText: "Enabled",
      displayFieldText: "Display Field",
      selectMenuOption: "Select Menu",
      selectRadioOption: "Radio Button",
      selectTextOption: "Text",
      selectDateOption: "Date Picker",
      selectRangeOption: "Touch-Spinner",
      selectCheckboxOption: "Checkbox",
      selectMailOption: "Email",
      selectUrlOption: "URL",
      selectTextAreaOption: "Text Area",
      previewApplicationText: "Preview Application",
      saveApplicationText: "Save Application",
      saveText: "Save",
      toggleNavigationText: "Toggle navigation",
      formPlaceholderText: "My Form",
      shareBuilderInProgressTitleMessage: "Publishing GeoForm",
      shareBuilderProgressBarMessage: "Please Wait&hellip;",
      shareBuilderTitleMessage: "Success! Item saved",
      shareBuilderTextMessage: "You can start collecting information by sharing with others",
      shareModalFormText: "Form Link",
      shareBuilderSuccess: "Your GeoForm has been updated & published!",
      geoformTitleText: "Geo Form",
      layerTabText: "This is the layer(s) that the GeoForm will be built from. The layer must be a feature service that is enabled for editing with sharing permissions appropriate for your audience. If all layers are selected, the form will allow a user to choose which form layer to submit to.",
      detailsTabText: "Use the Form Detail boxes below to customize the Title, add a custom logo, and provide a short description for your GeoForm audience. In the description you can add links to other resources, contact information, and even point your audience to a web mapping application featuring all of the data collected with the GeoForm.",
      fieldsTabText: "Here you can select which fields will be visible to your GeoForm audience, edit the Labels they will see, and add a short Description to help with data entry.",
      styleTabText: "Style your GeoForm using the themes below based on your preference.",
      viewerTabText: "Set options for viewing submissions collected from the GeoForm.",
      publishTabText: "If you are finished customizing your GeoForm, save the application and begin sharing with your audience. You can always return to this builder and continue customizing it based on feedback.",
      headerSizeLabel: "Header Size",
      smallHeader: "Use Small Header",
      bigHeader: "Use Large Header",
      pushpinText: "Push pin",
      doneButtonText: "Save and Exit",
      fieldTabPlaceHolderHeaderText: "Hint (optional)",
      enableAttachmentLabelText: "${openStrong}Enable Attachments${closeStrong}",
      enableAttachmentLabelHint: "You can enable/disable the attachments here",
      attachmentIsRequiredLabelText: "${openStrong}Attachment Required${closeStrong}",
      attachmentIsRequiredLabelHint: "If necessary, users can be required to enter an attachment.",
      attachmentLabelText: "Attachment Button Label",
      attachmentLabelHint: "This text will appear next to the Attachment Button. You can use this space to describe what you would like your audience to attach (photo, video, document, etc.), the file format you are asking for (.jpeg, .png, .docx, .pdf, etc.), and any additional instructions",
      attachmentDescription: "Attachment Description",
      attachmentHint: "If necessary, you can provide additional attachment instructions here.",
      jumbotronDescription: "Use large or small heading for your form. A large header may help define the purpose of your application but it takes up more room on your screen",
      shareGeoformText: "Social media sharing buttons",
      shareDescription: "Social media buttons allow your audience to easily share your GeoForm once they have made a submission",
      defaultMapExtent: "Default Map Extent",
      defaultMapExtentDescription: "The map will reset to the default extent in your web map after submission - this can be disabled at any time.",
      pushpinOptionsDescription: "Choose from a variety of colors for the map pushpin, it should be different from the map symbology to help the user put their submission on the map",
      selectLocationText: "Select Location By",
      myLocationText: "My Location",
      searchText: "Search",
      coordinatesText: "Latitude & Longitude Coordinates",
      usng: "USNG Coordinates",
      mgrs: "MGRS Coordinates",
      utm: "UTM Coordinates",
      selectLocationSDescription: "Allow users to select a location using these methods.",
      dragTooltipText: "Drag the field where you want it to appear",
      showHideLayerText: "Show Layer",
      showHideLayerHelpText: "You can configure the GeoForm to Show/Hide Layer. This option only applies to a single layer setup.",
      enableOfflineSupport: "Enable offline support",
      enableOfflineSupportHelpText: "Store submissions when there is no network connection and submit them when a connection is restored.",
      labelHelpMessage: "Label",
      placeHolderHintMessage: "Hint Text",
      placeHolderHelpMessage: "Help Text",
      selectTextOptionValue: "Filter Select",
      disableLogo: "Disable Logo",
      disableLogoDescription: "You can configure the GeoForm to Show/Hide the Logo in the form header",
      locateOnLoadText: "Locate On Load",
      locateOnLoadDescription: "You can configure the GeoForm to use the current location on page load",
      selectLayerFieldTabText: "Select Layer",
      allLayerSelectOptionText: "All Layers",
      disableViewer: "Disable Viewer",
      disableViewerDescription: "You can configure the GeoForm to disable/enable the viewer",
      displayFieldHintText: "Selected display field will be shown in the viewer as a title"
    },
    viewer: {
      geocoderCancelText: "Cancel",
      viewMapTabText: "Map",
      sortHeaderText: "Sort By:",
      geocoderPlaceholderText: "Zip Code, city, etc.",
      noSearchResult: "No result found",
      legendTabTooltip: "Legend",
      aboutUsTabTooltip: "About Us",
      mapTabTooltip: "Map",
      btnDescendingText: "Desc",
      btnAscendingText: "Asc",
      geometryUnavailableErrorMessage: "Error finding the geometry of the feature",
      infoPopupOffErrorMessage: "No information to display",
      btnLoadMoreText: "Load More",
      unavailableTitleText: "Untitled",
      unavailableConfigMessage: "Unable to load config",
      share: "Share",
      viewReportsTabText: "Reports",
      viewLegendTabText: "Legend",
      viewAboutusTabText: "About",
      appLoadingFailedMessage: "There was an error loading the viewer"
    }
  }),
  "ar": 1,
  "bs": 1,
  "cs": 1,
  "da": 1,
  "de": 1,
  "el": 1,
  "es": 1,
  "et": 1,
  "fi": 1,
  "fr": 1,
  "he": 1,
  "hi": 1,
  "hr": 1,
  "id": 1,
  "it": 1,
  "ja": 1,
  "ko": 1,
  "lt": 1,
  "lv": 1,
  "nl": 1,
  "nb": 1,
  "pl": 1,
  "pt-br": 1,
  "pt-pt": 1,
  "ro": 1,
  "ru": 1,
  "sq": 1,
  "sr": 1,
  "sv": 1,
  "th": 1,
  "tr": 1,
  "vi": 1,
  "zh-cn": 1,
  "zh-hk": 1,
  "zh-tw": 1
});