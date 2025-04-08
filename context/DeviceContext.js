import React, { createContext, useContext, useState } from "react";

// Create context
const DeviceContext = createContext();

export const useDeviceContext = () => useContext(DeviceContext);

export const DeviceProvider = ({ children }) => {
  // State for connected devices
  const [connectedDevices, setConnectedDevices] = useState({
    bt: [
      {
        id: "edge",
        name: "EDGE",
        image: require("../assets/devices/edge.png"),
      },
      {
        id: "robin",
        name: "ROBIN'S Earphones",
        image: require("../assets/devices/robin.png"),
      },
      {
        id: "bianca",
        name: "BIANCA:STIGMATA",
        image: require("../assets/devices/bianca.png"),
      },
    ],
    usb: [
      {
        id: "marigold",
        name: "Marigold",
        image: require("../assets/devices/marigold.png"),
      },
      {
        id: "rays",
        name: "Rays",
        image: require("../assets/devices/rays.png"),
      },
      {
        id: "echo-b",
        name: "ECHO-B",
        image: require("../assets/devices/echo-b.png"),
      },
    ],
    wired: [
      {
        id: "kadenz",
        name: "Kadenz",
        image: require("../assets/devices/kadenz.png"),
      },
      {
        id: "para",
        name: "PARA",
        image: require("../assets/devices/para.png"),
      },
    ],
  });

  // State for devices to select
  const [selectableDevices, setSelectableDevices] = useState([
    {
      id: "marigold",
      name: "Marigold",
      icon: require("../assets/icons/earbuds.png"),
    },
    { id: "rays", name: "Rays", icon: require("../assets/icons/earbuds.png") },
    {
      id: "echo-b",
      name: "ECHO-B",
      icon: require("../assets/icons/earbuds.png"),
    },
    {
      id: "starlight",
      name: "Starlight",
      icon: require("../assets/icons/earbuds-star.png"),
    },
    {
      id: "chu2-dsp",
      name: "CHU2 DSP",
      icon: require("../assets/icons/earphones-alt.png"),
    },
    {
      id: "dusk-sp",
      name: "DUSK-SP",
      icon: require("../assets/icons/earphones-dual.png"),
    },
    {
      id: "cdsp",
      name: "CDSP",
      icon: require("../assets/icons/earphones-round.png"),
    },
    { id: "may", name: "MAY", icon: require("../assets/icons/earbuds.png") },
    {
      id: "freedsp",
      name: "FreeDSP",
      icon: require("../assets/icons/earphones-circle.png"),
    },
    {
      id: "dawn-pro",
      name: "DAWN PRO",
      icon: require("../assets/icons/earbuds-alt.png"),
    },
    {
      id: "moonriver",
      name: "MOONRIVER 2 Ti",
      icon: require("../assets/icons/earbuds-alt.png"),
    },
    {
      id: "dawn-3",
      name: "DAWN 3.5",
      icon: require("../assets/icons/earbuds-generic.png"),
    },
  ]);

  // Current device state
  const [currentDevice, setCurrentDevice] = useState({
    id: "may",
    name: "MAY",
    model: "Nekocake",
    version: "1.0.0",
    mac: "41:42:4C:30:87:F5",
    image: require("../assets/devices/may.png"),
    hasEQ: true,
    hasCustomEQ: true,
    hasConfigFile: true,
    hasFirmwareUpdate: true,
  });

  // Wallpapers
  const [wallpapers, setWallpapers] = useState([
    {
      id: "1",
      image:
        "https://cdn.prod.website-files.com/627128d862c9a44234848dda/657a724b6f96fa8facd13615_%E6%97%85%E8%A1%8C%E8%80%85.jpg",
    },
    {
      id: "2",
      image:
        "https://moondroplab.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/625fb843a8046c1c7861d89e/671a2ff725a231518ee5e789_robin-m.jpg",
    },
    {
      id: "3",
      image:
        "https://scontent.fcgk30-1.fna.fbcdn.net/v/t39.30808-6/480686050_930633865898819_4247634778649099431_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeF3OqmLPp_QCq00e8e5Oo_8pXg_YlrYUIGleD9iWthQgQvHW0DdQkRyspgOiC5zJ4BSVBT5CW8TK0m9ha58g4U-&_nc_ohc=L-Bt94WJNloQ7kNvgF5l8qi&_nc_oc=AdgTbqJIG_B7KQpy5YdFmXtoY-tL5q2HwmA-Q8KpChAlum6nE1FysjmajkUOGS4dWnU&_nc_zt=23&_nc_ht=scontent.fcgk30-1.fna&_nc_gid=AZhOi6SZ6AvcwSPYpjB2T8H&oh=00_AYEBFujBpYgxcXZfZEtrJPOgVfEkGe0E8JnqtiZ6_WD8fw&oe=67D28DD5",
    },
    {
      id: "4",
      image:
        "https://cdn.prod.website-files.com/627128d862c9a44234848dda/64dc8dfab3dfcf5fa53e042b_33.jpg",
    },
    {
      id: "5",
      image:
        "https://cdn.prod.website-files.com/627128d862c9a44234848dda/64d19ce1ee89ff2192fd2af2_BEAUTIFUL-WORLD.jpg",
    },
    {
      id: "6",
      image:
        "https://cdn.prod.website-files.com/627128d862c9a44234848dda/6443519ae250ac7bf9fdbcb8_ARIASE-FULL.jpg",
    },
    {
      id: "7",
      image:
        "https://cdn.prod.website-files.com/627128d862c9a44234848dda/673aaa576ccbf2bcc132b379_KADENZ.jpg",
    },
    {
      id: "8",
      image: "https://pbs.twimg.com/media/Gc9DtgrWwAA4t8c.jpg:large",
    },
  ]);
  // Settings
  const [settings, setSettings] = useState({
    nightMode: true,
    language: "English",
  });

  // Add a device
  const addDevice = (deviceType, device) => {
    setConnectedDevices((prev) => ({
      ...prev,
      [deviceType]: [...prev[deviceType], device],
    }));
  };

  // Select a device to make it current
  const selectDevice = (deviceId) => {
    const deviceInfo = selectableDevices.find((d) => d.id === deviceId);
    if (deviceInfo) {
      setCurrentDevice({
        ...deviceInfo,
        image: require("../assets/devices/may.png"), // Default to may image for example
        hasEQ: true,
        hasCustomEQ: true,
        hasConfigFile: true,
        hasFirmwareUpdate: true,
      });
    }
  };

  // Update settings
  const updateSettings = (newSettings) => {
    setSettings((prev) => ({
      ...prev,
      ...newSettings,
    }));
  };

  return (
    <DeviceContext.Provider
      value={{
        connectedDevices,
        currentDevice,
        selectableDevices,
        wallpapers,
        settings,
        addDevice,
        selectDevice,
        updateSettings,
      }}
    >
      {children}
    </DeviceContext.Provider>
  );
};
