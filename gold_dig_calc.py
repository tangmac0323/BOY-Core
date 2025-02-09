# def best_upgrade_stop(total_digs):
#     """
#     Determines the best time to stop upgrading based on total dig times.

#     Args:
#         total_digs (int): The total number of digs available.

#     Returns:
#         int: The optimal number of upgrades to perform.
#     """
#     # Constants
#     extra_gold_per_upgrade = 40  # Extra gold per dig per upgrade
#     initial_upgrade_cost = 400  # Base cost of the first upgrade
#     max_upgrades = 100  # Maximum number of upgrades allowed

#     # Variables
#     remaining_digs = total_digs
#     current_upgrade = 0
#     upgrade_cost_multiplier = 1

#     while remaining_digs > 0 and current_upgrade < max_upgrades:
#         # Calculate upgrade cost
#         upgrade_cost = initial_upgrade_cost * upgrade_cost_multiplier

#         # Calculate potential extra gold from the upgrade
#         extra_gold_from_upgrade = extra_gold_per_upgrade * (current_upgrade + 1) * remaining_digs

#         # Check if the upgrade is profitable
#         if extra_gold_from_upgrade > upgrade_cost:
#             # Perform the upgrade
#             current_upgrade += 1
#             upgrade_cost_multiplier += 1
#             remaining_digs -= 1  # Account for one dig used in upgrading
#         else:
#             # Stop upgrading if it's no longer profitable
#             break

#     return current_upgrade

# # Example usage
# total_digs = 90
# optimal_upgrades = best_upgrade_stop(total_digs)
# print(f"Optimal number of upgrades for {total_digs} digs: {optimal_upgrades}")



def days_to_reach_max_upgrade(daily_digs, base_rate, base_upgrade_cost=400, max_upgrades=100):
    """
    Calculates the number of days required to reach the maximum number of upgrades.

    Args:
        daily_digs (int): The number of digs allowed per day.
        base_rate (int): The base gold earned per dig.
        base_upgrade_cost (int): The cost of the first upgrade. Subsequent upgrades increase by this amount.
        max_upgrades (int): The maximum number of upgrades allowed.

    Returns:
        int: The number of days required to reach the maximum upgrades.
    """
    # Constants
    extra_gold_per_upgrade = 0.04 * base_rate  # Extra gold per dig per upgrade

    # Variables
    total_gold = 0
    current_upgrade = 0
    upgrade_cost_multiplier = 1
    days = 0

    while current_upgrade < max_upgrades:
        # Calculate the cost of the next upgrade
        upgrade_cost = base_upgrade_cost * upgrade_cost_multiplier

        # Earn gold for the day
        daily_gold = daily_digs * (base_rate + extra_gold_per_upgrade * current_upgrade)
        total_gold += daily_gold

        # Check if enough gold is available for the next upgrade
        while total_gold >= upgrade_cost and current_upgrade < max_upgrades:
            total_gold -= upgrade_cost
            current_upgrade += 1
            upgrade_cost_multiplier += 1
            upgrade_cost = base_upgrade_cost * upgrade_cost_multiplier  # Update for next upgrade

        # Increment the day count
        days += 1

    return days

# Example usage
daily_digs = 2
base_rate = 2500
max_upgrade_days = days_to_reach_max_upgrade(daily_digs, base_rate)
print(f"Number of days to reach max upgrades: {max_upgrade_days}")
