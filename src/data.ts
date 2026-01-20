export interface Project {
    name: string;
    description: string;
    github: string;
    subdomain?: string; // Only for web apps
}

export const webApps: Project[] = [
    {
        name: 'QR Secure Share',
        subdomain: 'qrsecure',
        description: 'A progressive web app for QR-based offline file transfer and text QR generation. Share files between devices with no internet required.',
        github: 'https://github.com/andrewtheguy/qrcodesecureshare',
    },
    {
        name: 'Secure Send',
        subdomain: 'securesend',
        description: 'A progressive web app for encrypted P2P text and file transfer. PIN-based security with WebRTC direct connections and cloud fallback.',
        github: 'https://github.com/andrewtheguy/secure-send-web',
    },
    {
        name: 'NostrPad',
        subdomain: 'nostrpad',
        description: 'Simple shared notepad powered by Nostr relays. Create a pad, share the link, collaborate in real-time.',
        github: 'https://github.com/andrewtheguy/nostrpad',
    },
    {
        name: 'Audio Player',
        subdomain: 'audioplayer',
        description: 'Web-based audio player with HLS streaming support. Play .m3u8 streams with playback position memory.',
        github: 'https://github.com/andrewtheguy/audioplayer',
    },
    {
        name: 'Transmitwave',
        subdomain: 'transmitwave',
        description: 'Data-over-sound transmission using FSK modulation. Send data via audio between devices.',
        github: 'https://github.com/andrewtheguy/transmitwave',
    },
];

export const utilities: Project[] = [
    {
        name: 'Tunnel RS Manager',
        description: 'GUI Manager for tunnel-rs instances to easily manage your secure tunnels.',
        github: 'https://github.com/andrewtheguy/tunnel-rs-manager',
    },
    {
        name: 'Tunnel RS',
        description: 'High-performance tunneling tool written in Rust for exposing local servers securely.',
        github: 'https://github.com/andrewtheguy/tunnel-rs',
    },
    {
        name: 'Wormhole RS',
        description: 'Secure file transfer tool inspired by Magic Wormhole, written in Rust.',
        github: 'https://github.com/andrewtheguy/wormhole-rs',
    },
    {
        name: 'Dup File Finder RS',
        description: 'Fast duplicate file finder utility to help reclaim disk space.',
        github: 'https://github.com/andrewtheguy/dup-file-finder-rs',
    },
    {
        name: 'Audio Pattern Detector',
        description: 'Utility to detect specific audio patterns or trigger words in real-time streams.',
        github: 'https://github.com/andrewtheguy/audio_pattern_detector',
    },
    {
        name: 'Save Audio Stream',
        description: 'Command-line tool to record and save live audio streams to disk.',
        github: 'https://github.com/andrewtheguy/save_audio_stream',
    },
    {
        name: 'Whisper Transcribe Py',
        description: 'Python wrapper for OpenAI\'s Whisper model to easily transcribe audio files.',
        github: 'https://github.com/andrewtheguy/whisper_transcribe_py',
    },
    {
        name: 'Playsound RS',
        description: 'Cross-platform Rust library and CLI tool for playing audio files simply.',
        github: 'https://github.com/andrewtheguy/playsoundrs',
    },
    {
        name: 'File Organizer',
        description: 'CLI tool to automatically organize files into directories based on rules.',
        github: 'https://github.com/andrewtheguy/file-organizer',
    },
];
