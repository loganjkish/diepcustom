/*
    DiepCustom - custom tank game server that shares diep.io's WebSocket protocol
    Copyright (C) 2022 ABCxFF (github.com/ABCxFF)

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as published
    by the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program. If not, see <https://www.gnu.org/licenses/>
*/

import { TankDefinition } from "./TankDefinitions";

/**
 * The IDs for all the dev tanks, by name.
 */
export const enum DevTank {
    Developer = -1,
    Builder = -2
};

/**
 * List of all dev tank definitions.
*/
const DevTankDefinitions: TankDefinition[] = [
    {
        id: DevTank.Developer,
        name: "Developer",
        upgradeMessage: "",
        levelRequirement: 45,
        upgrades: [],
        flags: {
            invisibility: false,
            zoomAbility: false,
            devOnly: false
        },
        visibilityRateShooting: 0,
        visibilityRateMoving: 0,
        invisibilityRate: 0,
        fieldFactor: 0.45,
        speed: 3,
        absorbtionFactor: 1,
        preAddon: "spike",
        postAddon: null,
        maxHealth: Number.POSITIVE_INFINITY,
        sides: 1,
        borderWidth: 30,
        barrels: [
            {
                angle: 0,
                delay: 0,
                size: 85,
                offset: 0,
                recoil: 0,
                addon: null,
                bullet: {
                    type: "bullet",
                    speed: 1,
                    damage: Number.POSITIVE_INFINITY,
                    health: 1,
                    scatterRate: 0,
                    lifeLength: 1,
                    absorbtionFactor: 1,
                    sizeRatio: 1
                },
                reload: 0.05,
                width: 50,
                isTrapezoid: true,
                trapezoidDirection: Math.PI
            }
        ],
        stats: [
            {
                name: "Movement Speed",
                max: 0
            },
            {
                name: "Reload",
                max: 0
            },
            {
                name: "Bullet Damage",
                max: 0
            },
            {
                name: "Bullet Penetration",
                max: 0
            },
            {
                name: "Bullet Speed",
                max: 0
            },
            {
                name: "Body Damage",
                max: 0
            },
            {
                name: "Max Health",
                max: 0
            },
            {
                name: "Health Regen",
                max: 0
            }
        ]
    },
    {
        id: DevTank.Builder,
        name: "Builder",
        upgradeMessage: "",
        levelRequirement: 45,
        upgrades: [],
        flags: {
            invisibility: false,
            zoomAbility: false,
            devOnly: false
        },
        visibilityRateShooting: 0,
        visibilityRateMoving: 0,
        invisibilityRate: 0,
        fieldFactor: 0.45,
        speed: 3,
        absorbtionFactor: 1,
        maxHealth: Number.POSITIVE_INFINITY,
        preAddon: "spike",
        postAddon: null,
        sides: 1,
        borderWidth: 30,
        barrels: [
            {
                angle: 0,
                offset: 0,
                size: 80,
                width: 50,
                delay: 0,
                reload: 0.05,
                recoil: 0,
                isTrapezoid: true,
                trapezoidDirection: 0,
                addon: null,
                bullet: {
                    type: "wall",
                    sizeRatio: 0,
                    health: 0,
                    damage: 0,
                    speed: 0,
                    scatterRate: 1,
                    lifeLength: 0,
                    absorbtionFactor: 0
                }
            }
        ],
        stats: [
            {
                name: "Movement Speed",
                max: 0
            },
            {
                name: "Reload",
                max: 0
            },
            {
                name: "Drone Damage",
                max: 0
            },
            {
                name: "Drone Health",
                max: 0
            },
            {
                name: "Drone Speed",
                max: 0
            },
            {
                name: "Body Damage",
                max: 0
            },
            {
                name: "Max Health",
                max: 0
            },
            {
                name: "Health Regen",
                max: 0
            }
        ]
    }
]

export default DevTankDefinitions;
// export const DevTankCount = DevTankDefinitions.reduce((a, b) => b ? a + 1 : a, 1);
