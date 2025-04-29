def calculate_footprint(data):
    try:
        travel = float(data.get('travel', 0)) * 0.12
        energy = float(data.get('energy', 0)) * 0.45
        waste = float(data.get('waste', 0)) * 0.02
        total = round(travel + energy + waste, 2)
        tip = "Consider using public transport" if travel > 50 else "You're doing great! Keep it up."
        return total, tip
    except:
        return 0, "Invalid input. Please enter numeric values."
