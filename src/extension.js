/* extension.js
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 * SPDX-License-Identifier: GPL-2.0-or-later
 */

/* exported init */
const Main = imports.ui.main;
const initialClasses = Main.panel.statusArea['aggregateMenu'].container.style_class;

class Extension {
    constructor() {
    }

    enable() {
        Main.panel.statusArea['aggregateMenu'].container.style_class=initialClasses+' aggregateMenu';
        
    }

    disable() {
        Main.panel.statusArea['aggregateMenu'].container.style_class=initialClasses;
    }
}

function init() {
    return new Extension();
}
