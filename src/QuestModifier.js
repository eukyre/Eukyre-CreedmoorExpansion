"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestModifier = void 0;
class QuestModifier {
    // Helper method to update items in all AvailableForFinish conditions
    updateItemsInAllAvailableForFinish(questID, items, type, tables, jsonUtil, debug) {
        const quest = tables.templates.quests[questID];
        if (quest) {
            try {
                const availableForFinish = quest.conditions.AvailableForFinish;
                let modified = false;
                for (const conditionGroup of availableForFinish) {
                    const conditions = conditionGroup.counter.conditions[0];
                    if (type === 'weapon') {
                        const existingWeapons = jsonUtil.clone(conditions.weapon || []);
                        const updatedWeapons = new Set(existingWeapons);
                        for (const weapon of items) {
                            if (!updatedWeapons.has(weapon)) {
                                updatedWeapons.add(weapon);
                                modified = true;
                                if (debug) {
                                    console.log(`Added new weapon ${weapon} to AvailableForFinish condition in quest ${questID}`);
                                }
                            }
                            else if (debug) {
                                console.log(`AvailableForFinish condition in quest ${questID} already has the weapon ${weapon}`);
                            }
                        }
                        if (modified) {
                            conditions.weapon = Array.from(updatedWeapons);
                            if (debug) {
                                console.log(`Modified AvailableForFinish conditions in quest ${questID}:`, conditions.weapon);
                            }
                        }
                    }
                    else if (type === 'weaponModsInclusive' || type === 'weaponModsExclusive') {
                        const existingWeaponModsInclusive = jsonUtil.clone(conditions.weaponModsInclusive || []);
                        const updatedWeaponModsInclusive = new Set(existingWeaponModsInclusive.flat());
                        for (const weaponModArray of items) {
                            for (const weaponMod of weaponModArray) {
                                if (!updatedWeaponModsInclusive.has(weaponMod)) {
                                    updatedWeaponModsInclusive.add(weaponMod);
                                    modified = true;
                                    if (debug) {
                                        console.log(`Added new weapon mod ${weaponMod} to AvailableForFinish condition in quest ${questID}`);
                                    }
                                }
                                else if (debug) {
                                    console.log(`AvailableForFinish condition in quest ${questID} already has the weapon mod ${weaponMod}`);
                                }
                            }
                        }
                        if (modified) {
                            conditions.weaponModsInclusive = Array.from(updatedWeaponModsInclusive).map(mod => [mod]);
                            if (debug) {
                                console.log(`Modified AvailableForFinish conditions in quest ${questID}:`, conditions.weaponModsInclusive);
                            }
                        }
                    }
                }
            }
            catch (error) {
                console.error(`Error modifying items in AvailableForFinish conditions for quest ${questID}:`, error);
            }
        }
        else {
            console.warn(`Quest with ID ${questID} not found.`);
        }
    }
    // Method to update quest data based on type, optionally push to all AvailableForFinish
    updateQuestData(questID, items, type, tables, jsonUtil, pushToAllAvailableForFinish, debug, availableForFinishIndex = 0 // New parameter to specify the index
    ) {
        if (pushToAllAvailableForFinish) {
            this.updateItemsInAllAvailableForFinish(questID, items, type, tables, jsonUtil, debug);
        }
        else {
            const quest = tables.templates.quests[questID];
            if (quest) {
                if (type === 'weapon') {
                    this.updateQuestWeapons(questID, items, tables, jsonUtil, debug, availableForFinishIndex // Pass the index to the helper method
                    );
                }
                else if (type === 'weaponModsInclusive' || type === 'weaponModsExclusive') {
                    this.updateQuestWeaponMods(questID, items, tables, jsonUtil, debug, availableForFinishIndex // Pass the index to the helper method
                    );
                }
            }
            else {
                console.warn(`Quest with ID ${questID} not found.`);
            }
        }
    }
    // Method to update weapons in the quest
    updateQuestWeapons(questID, weapons, tables, jsonUtil, debug, availableForFinishIndex = 0 // New parameter to specify the index
    ) {
        const quest = tables.templates.quests[questID];
        if (quest) {
            try {
                // Extract existing weapons based on the specified index
                const existingWeapons = quest.conditions.AvailableForFinish[availableForFinishIndex].counter.conditions[0].weapon;
                // Clone the existing weapons array
                const updatedWeapons = jsonUtil.clone(existingWeapons);
                let modified = false;
                // Add new weapons if they do not already exist
                for (const weapon of weapons) {
                    if (!updatedWeapons.includes(weapon)) {
                        updatedWeapons.push(weapon);
                        modified = true;
                        if (debug) {
                            console.log(`Added new weapon ${weapon} to quest ${questID}`);
                        }
                    }
                    else if (debug) {
                        console.log(`Quest ${questID} already has the weapon ${weapon}`);
                    }
                }
                // Only update the quest if modifications were made
                if (modified) {
                    quest.conditions.AvailableForFinish[availableForFinishIndex].counter.conditions[0].weapon = updatedWeapons;
                    if (debug) {
                        console.log(`Modified quest ${questID}:`, updatedWeapons);
                    }
                }
            }
            catch (error) {
                console.error(`Error modifying quest ${questID} weapons:`, error);
            }
        }
        else {
            console.warn(`Quest with ID ${questID} not found.`);
        }
    }
    // Method to update weapon mods inclusive in the quest
    updateQuestWeaponMods(questID, weaponModsInclusive, tables, jsonUtil, debug, availableForFinishIndex = 0 // New parameter to specify the index
    ) {
        const quest = tables.templates.quests[questID];
        if (quest) {
            try {
                // Extract existing weapon mods inclusive based on the specified index
                const availableForFinish = quest.conditions.AvailableForFinish;
                if (availableForFinish.length <= availableForFinishIndex) {
                    console.warn(`Index ${availableForFinishIndex} is out of bounds for AvailableForFinish in quest ${questID}.`);
                    return;
                }
                const existingWeaponModsInclusive = availableForFinish[availableForFinishIndex].counter.conditions[0].weaponModsInclusive;
                // Clone the existing weapon mods inclusive array
                const updatedWeaponModsInclusive = jsonUtil.clone(existingWeaponModsInclusive);
                let modified = false;
                // Add new weapon mods if they do not already exist
                for (const weaponModArray of weaponModsInclusive) {
                    for (const weaponMod of weaponModArray) {
                        if (!updatedWeaponModsInclusive.flat().includes(weaponMod)) {
                            updatedWeaponModsInclusive.push(weaponModArray);
                            modified = true;
                            if (debug) {
                                console.log(`Added new weapon mod ${weaponMod} to quest ${questID}`);
                            }
                        }
                        else if (debug) {
                            console.log(`Quest ${questID} already has the weapon mod ${weaponMod}`);
                        }
                    }
                }
                // Only update the quest if modifications were made
                if (modified) {
                    availableForFinish[availableForFinishIndex].counter.conditions[0].weaponModsInclusive = updatedWeaponModsInclusive;
                    if (debug) {
                        console.log(`Modified quest ${questID}:`, updatedWeaponModsInclusive);
                    }
                }
            }
            catch (error) {
                console.error(`Error modifying quest ${questID} weapon mods inclusive:`, error);
            }
        }
        else {
            console.warn(`Quest with ID ${questID} not found.`);
        }
    }
    // Method to modify quests with specific items and updates
    modifyQuests(tables, jsonUtil, debug) {
        // Define new items
        // Debug output
        if (debug) {
            console.log('Updated quests with new items.');
        }
    }
}
exports.QuestModifier = QuestModifier;
//# sourceMappingURL=QuestModifier.js.map