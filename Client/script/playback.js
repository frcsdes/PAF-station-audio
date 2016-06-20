/*Copyright© 2016 Vincent Bisogno, François Desrichard, Enguerrand de Ribaucourt, Pierre Ucla

This file is part of Serval Audio Editor.

Serval Audio Editor is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.*/

var audioContext = new AudioContext() ;
var soundBuffer ;

function play() {
    if (!soundBuffer) return;

    // Create AudioBufferSourceNode and attach buffer
    var source = audioContext.createBufferSource();
    source.buffer = soundBuffer;

    // Connect it to the output
    source.connect(audioContext.destination);

    // Play the source
    source.start(0);
}

function playback(audioBuffer) {  // ArrayBuffer objects work to
  soundBuffer = audioBuffer;
  play();
}