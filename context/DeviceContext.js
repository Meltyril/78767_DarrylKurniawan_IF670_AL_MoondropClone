import React, { createContext, useContext, useState } from "react";

// Create context
const DeviceContext = createContext();

export const useDeviceContext = () => useContext(DeviceContext);

export const DeviceProvider = ({ children }) => {
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

  const [selectableDevices, setSelectableDevices] = useState([
    {
      id: "marigold",
      name: "Marigold",
      icon: "https://moondroplab.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/625fb843a8046c1c7861d89e/67207c891055a494012179cb_CD2U-MOBILE.jpg",
    },
    {
      id: "rays",
      name: "Rays",
      icon: "https://shenzhenaudio.com/cdn/shop/files/1_aa7b5e08-48ce-4580-b7fd-1b9d2a5dd47f.png?v=1744167150",
    },
    {
      id: "echo-b",
      name: "ECHO-B",
      icon: "https://csi-zone.id/cdn/shop/files/1737422518477_1.png?v=1737423159",
    },
    {
      id: "starlight",
      name: "Starlight",
      icon: "https://m.media-amazon.com/images/S/aplus-media/sc/b9baf44d-8feb-4090-8f21-8535d4a42b64.__CR0,0,300,300_PT0_SX300_V1___.jpg",
    },
    {
      id: "chu2-dsp",
      name: "CHU2 DSP",
      icon: "https://cdn.prod.website-files.com/627128d862c9a44234848dda/64a67decb6354a3471c0d4cd_CHU2.jpg",
    },
    {
      id: "dusk-sp",
      name: "DUSK-SP",
      icon: "https://www.theaudiostore.in/cdn/shop/articles/Review_of_MOONDROP_x_Crinacle_DUSK_In-ear_Monitor.png?v=1716356894",
    },
    {
      id: "cdsp",
      name: "CDSP",
      icon: "https://down-id.img.susercontent.com/file/id-11134207-7r98p-lov7f3bm7a19fc",
    },
    {
      id: "may",
      name: "MAY",
      icon: "https://cdn.prod.website-files.com/627128d862c9a44234848dda/65780ab878fffdcd92172123_MAY.jpg",
    },
    {
      id: "freedsp",
      name: "FreeDSP",
      icon: "https://images.tokopedia.net/img/cache/700/VqbcmM/2023/11/24/e4782aee-c938-4174-95b2-63514e9307b9.jpg",
    },
    {
      id: "nekocake",
      name: "Nekocake",
      icon: "https://images.tokopedia.net/img/cache/700/OJWluG/2023/3/7/f07867cf-cc4c-4bb3-a394-632c74d7c8c8.jpg",
    },
    {
      id: "dawn-pro",
      name: "DAWN PRO",
      icon: "https://cdn.prod.website-files.com/627128d862c9a44234848dda/64d9c81be627fe010d036677_DAWNPRO.jpg",
    },
    {
      id: "moonriver",
      name: "MOONRIVER 2 Ti",
      icon: "https://cdn.prod.website-files.com/627128d862c9a44234848dda/648680b3b0d3ba0453460997_MOONRIVER2TI.jpg",
    },
    {
      id: "dawn-3",
      name: "DAWN 3.5",
      icon: "https://cdn.prod.website-files.com/627128d862c9a44234848dda/641e4e1867c6992f22d766c8_DAWN-3.5.jpg",
    },
  ]);

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

  const [settings, setSettings] = useState({
    nightMode: true,
    language: "English",
  });

  const addDevice = (deviceType, device) => {
    setConnectedDevices((prev) => ({
      ...prev,
      [deviceType]: [...prev[deviceType], device],
    }));
  };

  const selectDevice = (deviceId) => {
    const selectableDevice = selectableDevices.find((d) => d.id === deviceId);

    const allConnectedDevices = [
      ...connectedDevices.bt,
      ...connectedDevices.usb,
      ...connectedDevices.wired,
    ];
    const connectedDevice = allConnectedDevices.find((d) => d.id === deviceId);

    // Determine the device to set as current
    const deviceToSet = connectedDevice || selectableDevice;

    if (deviceToSet) {
      setCurrentDevice({
        id: deviceToSet.id,
        name: deviceToSet.name,
        image:
          deviceToSet.image ||
          deviceToSet.icon ||
          require("../assets/devices/may.png"),
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
