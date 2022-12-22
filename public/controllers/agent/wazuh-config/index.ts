const architectureButtons = [
  {
    id: 'i386',
    label: 'i386',
  },
  {
    id: 'x86_64',
    label: 'x86_64',
  },
  {
    id: 'armhf',
    label: 'armhf',
  },
  {
    id: 'aarch64',
    label: 'aarch64',
  },
];

const architectureButtonsWithPPC64LE = [
  {
    id: 'i386',
    label: 'i386',
  },
  {
    id: 'x86_64',
    label: 'x86_64',
  },
  {
    id: 'armhf',
    label: 'armhf',
  },
  {
    id: 'aarch64',
    label: 'aarch64',
  },
  {
    id: 'powerpc',
    label: 'PowerPC',
  },
];

const architectureButtonsi386 = [
  {
    id: 'i386',
    label: 'i386',
  },
];

const architecturei386Andx86_64 = [
  {
    id: 'i386',
    label: 'i386',
  },
  {
    id: 'x86_64',
    label: 'x86_64',
  },
];

const architectureButtonsSolaris = [
  {
    id: 'i386',
    label: 'i386',
  },
  {
    id: 'sparc',
    label: 'SPARC',
  },
];

const architectureButtonsMacos = [
  {
    id: 'intel/applesilicon',
    label: 'Intel/Apple Silicon',
  },
];

const architectureButtonsOpenSuse = [
  {
    id: 'x86_64',
    label: 'x86_64',
  },
  {
    id: 'ARM64',
    label: 'ARM64',
  },
];

const architectureButtonsAix = [
  {
    id: 'powerpc',
    label: 'PowerPC',
  },
];

const architectureButtonsHpUx = [
  {
    id: 'itanium2',
    label: 'Itanium2',
  },
];

const versionButtonAmazonLinux = [
  {
    id: 'amazonlinux1',
    label: 'Amazon Linux 1',
  },
  {
    id: 'amazonlinux2',
    label: 'Amazon Linux 2',
  },
  {
    id: 'amazonlinux2022',
    label: 'Amazon Linux 2022',
  },
];

const versionButtonsRedHat = [
  {
    id: 'redhat5',
    label: 'Red Hat 5',
  },
  {
    id: 'redhat6',
    label: 'Red Hat 6',
  },
  {
    id: 'redhat7',
    label: 'Red Hat 7 or higher',
  },
];

const versionButtonsCentos = [
  {
    id: 'centos5',
    label: 'Centos 5',
  },
  {
    id: 'centos6',
    label: 'Centos 6',
  },
  {
    id: 'centos7',
    label: 'Centos 7 or higher',
  },
];

const versionButtonsDebian = [
  {
    id: 'debian7',
    label: 'Debian 7',
  },
  {
    id: 'debian8',
    label: 'Debian 8',
  },
  {
    id: 'debian9',
    label: 'Debian 9',
  },
  {
    id: 'debian10',
    label: 'Debian 10 or higher',
  },
];

const versionButtonFedora = [
  {
    id: '22',
    label: 'Fedora 22 or higher',
  },
];

const versionButtonsUbuntu = [
  {
    id: 'ubuntu14',
    label: 'Ubuntu 14',
  },
  {
    id: 'ubuntu15',
    label: 'Ubuntu 15 or higher',
  },
];

const versionButtonsWindows = [
  {
    id: 'windowsxp',
    label: 'Windows XP',
  },
  {
    id: 'windowsserver2008',
    label: 'Windows Server 2008',
  },
  {
    id: 'windows7',
    label: 'Windows 7 or higher',
  },
];

const versionButtonsSuse = [
  {
    id: 'suse11',
    label: 'SUSE 11',
  },
  {
    id: 'suse12',
    label: 'SUSE 12',
  },
];

const versionButtonsMacOS = [
  {
    id: 'sierra',
    label: 'macOS Sierra or higher',
  },
];

const versionButtonsOpenSuse = [
  {
    id: 'leap15',
    label: 'OpenSuse Leap 15 or higher',
  },
];

const versionButtonsSolaris = [
  {
    id: 'solaris10',
    label: 'Solaris 10',
  },
  {
    id: 'solaris11',
    label: 'Solaris 11',
  },
];

const versionButtonsAix = [
  {
    id: '6.1 TL9',
    label: 'AIX 6.1 TL9 or higher',
  },
];

const versionButtonsHPUX = [
  {
    id: '11.31',
    label: 'HP-UX 11.31 or higher',
  },
];

const versionButtonsOracleLinux = [
  {
    id: 'oraclelinux5',
    label: 'Oracle Linux 5',
  },
  {
    id: 'oraclelinux6',
    label: 'Oracle Linux 6 or higher',
  },
];

const versionButtonsRaspbian = [
  {
    id: 'busterorgreater',
    label: 'Raspbian Buster or greater',
  },
];

const versionButtonAlpine = [
  {
    id: '3.12.12',
    label: '3.12.12 or higher',
  },
];

/**
 * Order the OS Buttons Alphabetically by label
 * @param a
 * @param b
 * @returns
 */
const orderOSAlphabetically = (a, b) => {
  if (a.label.toUpperCase() < b.label.toUpperCase()) {
    return -1;
  }
  if (a.label.toUpperCase() > b.label.toUpperCase()) {
    return 1;
  }
  return 0;
};

const osPrincipalButtons = [
  {
    id: 'rpm',
    label: 'Red Hat Enterprise Linux',
  },
  {
    id: 'cent',
    label: 'CentOS',
  },
  {
    id: 'ubu',
    label: 'Ubuntu',
  },
  {
    id: 'win',
    label: 'Windows',
  },
  {
    id: 'macos',
    label: 'macOS',
  },
];

const osButtons = [
  {
    id: 'deb',
    label: 'Debian',
  },
  {
    id: 'open',
    label: 'OpenSuse',
  },
  {
    id: 'sol',
    label: 'Solaris',
  },
  {
    id: 'aix',
    label: 'AIX',
  },
  {
    id: 'hp',
    label: 'HP-UX',
  },
  {
    id: 'amazonlinux',
    label: 'Amazon Linux',
  },
  {
    id: 'fedora',
    label: 'Fedora',
  },
  {
    id: 'oraclelinux',
    label: 'Oracle Linux',
  },
  {
    id: 'suse',
    label: 'SUSE',
  },
  {
    id: 'raspbian',
    label: 'Raspbian OS',
  },
  {
    id: 'alpine',
    label: 'Alpine',
  },
].sort(orderOSAlphabetically);

export {
  architectureButtons,
  architecturei386Andx86_64,
  versionButtonsRaspbian,
  versionButtonsSuse,
  architectureButtonsWithPPC64LE,
  versionButtonsOracleLinux,
  versionButtonFedora,
  versionButtonsRedHat,
  versionButtonsCentos,
  versionButtonAlpine,
  architectureButtonsMacos,
  osButtons,
  osPrincipalButtons,
  versionButtonsDebian,
  versionButtonsUbuntu,
  versionButtonAmazonLinux,
  versionButtonsWindows,
  versionButtonsMacOS,
  versionButtonsOpenSuse,
  versionButtonsSolaris,
  versionButtonsAix,
  versionButtonsHPUX,
  architectureButtonsi386,
  architectureButtonsSolaris,
  architectureButtonsAix,
  architectureButtonsHpUx,
  architectureButtonsOpenSuse,
};
